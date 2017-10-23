import React from 'react';

import SPELLS from 'common/SPELLS';
import SpellLink from 'common/SpellLink';
import SpellIcon from 'common/SpellIcon';

import Module from 'Parser/Core/Module';

import StatisticBox, { STATISTIC_ORDER } from 'Main/StatisticBox';

// Inspired by the penance bolt counter module from Discipline Priest

const FISTS_OF_FURY_MINIMUM_TICK_TIME = 2000; // This is to check that additional ticks aren't just hitting secondary targets

class FistsofFury extends Module {
    previousTickTimestamp = null;
    fistsTickNumber = 0;
    fistsCastNumber = 0;
    averageTicks = 0;

    isNewFistsTick(timestamp) {
        return !this.previousTickTimestamp || (timestamp - this.previousTickTimestamp) > FISTS_OF_FURY_MINIMUM_TICK_TIME;
    }

    on_byPlayer_cast(event) {
        const spellId = event.ability.guid;
        if (spellId === SPELLS.FISTS_OF_FURY_CAST.id) {
            this.fistsCastNumber += 1;
            // average ticks is calculated here in case you don't hit any ticks during a cast'
            this.averageTicks = this.fistsTickNumber / this.fistsCastNumber;
        }
    }

    on_byPlayer_damage(event) {
        if (event.ability.guid === SPELLS.FISTS_OF_FURY_DAMAGE.id && (event.timestamp) !== this.previousTickTimestamp) {
            this.fistsTickNumber += 1;
            this.previousTickTimestamp = event.timeStamp;
            this.averageTicks = this.fistsTickNumber / this.fistsCastNumber;
        }
    }

    suggestions(when) {
        when(this.averageTicks).isLessThan(5).addSuggestion((suggest, actual, recommended) => {
            return suggest(<span> You are cancelling your <SpellLink id={SPELLS.FISTS_OF_FURY_CAST.id} /> casts early and losing ticks </span>)
                .icon(SPELLS.FISTS_OF_FURY_CAST.icon).actual(`${this.averageTicks.toFixed(2)} average ticks on each Fists of Fury cast`)
                .recommended(`Aim to get 5 ticks with each Fists of Fury cast (not always true with T20)`)
                .regular(recommended - 0.5).major(recommended - 1);
        });
    }

    statistic() {
        return (
            <StatisticBox
                icon={<SpellIcon id={SPELLS.FISTS_OF_FURY_CAST.id} />}
                value={this.averageTicks.toFixed(2)}
                label={(
                    <span> You had an average of {this.averageTicks.toFixed(2)} ticks in each Fists of Fury cast </span>
                )}
            />
        );
    }
    statisticOrder = STATISTIC_ORDER.OPTIONAL(2);
}



export default FistsofFury;
