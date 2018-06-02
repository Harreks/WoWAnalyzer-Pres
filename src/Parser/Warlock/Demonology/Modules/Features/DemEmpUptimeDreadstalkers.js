import React from 'react';

import Analyzer from 'Parser/Core/Analyzer';

import SPELLS from 'common/SPELLS';
import SpellLink from 'common/SpellLink';

import { formatPercentage } from 'common/format';

const CALL_DREADSTALKERS_COOLDOWN = 15;
const DEMONIC_EMPOWERMENT_COOLDOWN = 12;
const MILLISECONDS = 1000;

class DemEmpUptimeDreadstalkers extends Analyzer{
  demonicEmpowermentCount = 0;
  totalDreadstalkerTime = 0;
  lastDemEmpTimestamp = null;
  lastCallDreadstalkersTimestamp = null;
  demEmpCasts = 0;

  get uptime(){
    return this.totalDreadstalkerTime / this.owner.fightDuration;
  }

  get suggestionThresholds(){
    return {
      actual: this.uptime,
      isLessThan: {
        minor: 0.95,
        average: 0.90,
        major: 0.80,
      },
      style: 'percentage',
    };
  }

  on_byPlayer_cast(event){
    const spellId = event.ability.guid;
    if(spellId === SPELLS.CALL_DREADSTALKERS.id){
        this.lastCallDreadstalkersTimestamp = event.timestamp;
      } else if(spellId === SPELLS.DEMONIC_EMPOWERMENT.id){
        this.demEmpCasts += 1;
        if(this.lastCallDreadstalkersTimestamp === null){
          //We haven't summoned dreadstalkers yet this fight. We're bad.
        } else {
          if(event.timestamp - this.lastCallDreadstalkersTimestamp > (DEMONIC_EMPOWERMENT_COOLDOWN * MILLISECONDS)){
            //We're casting demonic empowerment past the point where our dreadstalkers would have despawned.
          } else { //We have active dreadstalkers!
            if(event.timestamp - this.lastDemEmpTimestamp > (DEMONIC_EMPOWERMENT_COOLDOWN * MILLISECONDS)){
              //We already empowered our dreadstalkers once before. We don't need to consider this
              //since dreadstalkers will always despawn before DemEmp expries.
            } else {
              const timeDelta = (CALL_DREADSTALKERS_COOLDOWN * MILLISECONDS) - (event.timestamp - this.lastCallDreadstalkersTimestamp); //Difference between our last CallD and our empowerment.
              this.totalDreadstalkerTime += timeDelta;
            }
          }
        }
        this.lastDemEmpTimestamp = event.timestamp;
    }
  }

  suggestions(when){
    when(this.suggestionThresholds)
      .addSuggestion((suggest, actual, recommended) => {
        return suggest(
          <React.Fragment>Empowerment of <SpellLink id={SPELLS.CALL_DREADSTALKERS.id} icon/> can be improved. Remember to always empower demons immediately after summoning.</React.Fragment>
        ).icon(SPELLS.CALL_DREADSTALKERS.icon)
          .actual(`${formatPercentage(actual)}% empowered uptime.`)
          .recommended(`>${formatPercentage(recommended)}% is recommended.`);
      });
  }


}

export default DemEmpUptimeDreadstalkers;
