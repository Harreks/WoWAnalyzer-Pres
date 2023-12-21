import { change, date } from 'common/changelog';
import { Pants, Vollmer } from 'CONTRIBUTORS';
import { SpellLink } from 'interface';
import TALENTS from 'common/TALENTS/evoker';
import SPELLS from 'common/SPELLS/evoker';

export default [
    change(date(2023, 12, 13), <>Added Boss filter button for Buff Helper, and improved loading speed.</>, Vollmer),
    change(date(2023, 12, 7), <>Update blacklist for Helpers to increase accuracy.</>, Vollmer),
    change(date(2023, 12, 4), <>Update Add a second WA to the Buff Helper module.</>, Pants),
    change(date(2023, 11, 29), <>Update <SpellLink spell={SPELLS.PRESCIENCE_BUFF} /> module to give more specific analysis.</>, Vollmer),
    change(date(2023, 11, 20), <>Re-enable Buff Helper module.</>, Vollmer),
    change(date(2023, 11, 19), <>Fix issue with missed <SpellLink spell={SPELLS.BREATH_OF_EONS_DAMAGE} /> cast.</>, Vollmer),
    change(date(2023, 11, 14), <>Update Breath Helper module to show potentially better buff targets.</>, Vollmer),
    change(date(2023, 11, 14), <>Update blacklist for new non-class abilities and re-enable Breath Helper module.</>, Vollmer),
    change(date(2023, 10, 21), <>Add statistics for T31 4pc.</>, Vollmer),
    change(date(2023, 10, 20), <>Update <SpellLink spell={SPELLS.EBON_MIGHT_BUFF_EXTERNAL} /> module to account for T31 2pc.</>, Vollmer),
    change(date(2023, 10, 18), <>Fix an error with trying to display graphs without data.</>, Vollmer),
    change(date(2023, 10, 17), <>Update styling for Buff Helper module.</>, Vollmer),
    change(date(2023, 10, 6), <>Add a new guide section for Helper modules.</>, Vollmer),
    change(date(2023, 10, 6), <>Implement a Breath Helper module.</>, Vollmer),
    change(date(2023, 10, 1), <>Update default target criteria for Buff Helper module.</>, Vollmer),
    change(date(2023, 9, 29), <>Update blacklist for Buff Helper module.</>, Vollmer),
    change(date(2023, 9, 26), <>Update Buff Helper module MRT note to support Prescience helper WeakAura.</>, Vollmer),
    change(date(2023, 9, 21), <>Give Sands of Time module cast breakdown flavor text some color for clarity.</>, Vollmer),
    change(date(2023, 9, 15), <>Implement a buff helper module.</>, Vollmer),
    change(date(2023, 9, 10), <>Fix issue with buff graph showing wrong amount of active <SpellLink spell={SPELLS.EBON_MIGHT_BUFF_EXTERNAL} />.</>, Vollmer),
    change(date(2023, 9, 2), <>Fix issue with <SpellLink spell={SPELLS.SHIFTING_SANDS_BUFF} /> module when targets wasn't defined.</>, Vollmer),
    change(date(2023, 8, 31), <>Fix issue with <SpellLink spell={SPELLS.SHIFTING_SANDS_BUFF} /> module when targets buffs wasn't defined.</>, Vollmer),
    change(date(2023, 8, 30), <>Fix issue with <SpellLink spell={TALENTS.EBON_MIGHT_TALENT} /> module when buff target spec wasn't defined.</>, Vollmer),
    change(date(2023, 8, 25), <>Add <SpellLink spell={TALENTS.LEAPING_FLAMES_TALENT} /> module.</>, Vollmer),
    change(date(2023, 8, 17), <>Add statistics for <SpellLink spell={TALENTS.SYMBIOTIC_BLOOM_TALENT} />.</>, Vollmer),
    change(date(2023, 8, 17), <>Add statistics for <SpellLink spell={TALENTS.BLISTERING_SCALES_TALENT} />, <SpellLink spell={TALENTS.REGENERATIVE_CHITIN_TALENT} /> & <SpellLink spell={TALENTS.REACTIVE_HIDE_TALENT} />.</>, Vollmer),
    change(date(2023, 8, 17), <>Add statistics for <SpellLink spell={TALENTS.TECTONIC_LOCUS_TALENT} />.</>, Vollmer),
    change(date(2023, 8, 17), <>Add statistics for <SpellLink spell={TALENTS.VOLCANISM_TALENT} />.</>, Vollmer),
    change(date(2023, 8, 17), <>Add statistics for <SpellLink spell={TALENTS.RICOCHETING_PYROCLAST_TALENT} />.</>, Vollmer),
    change(date(2023, 8, 17), <>Add statistics for <SpellLink spell={TALENTS.PUPIL_OF_ALEXSTRASZA_TALENT} />.</>, Vollmer),
    change(date(2023, 8, 17), <>Add statistics for <SpellLink spell={TALENTS.ANACHRONISM_TALENT} />.</>, Vollmer),
    change(date(2023, 8, 17), <>Fixed edgecase for <SpellLink spell={SPELLS.SANDS_OF_TIME} /> where <SpellLink spell={TALENTS.EBON_MIGHT_TALENT} /> should have extended but didn't.</>, Vollmer),
    change(date(2023, 8, 14), <>Fixed issue when <SpellLink spell={TALENTS.BREATH_OF_EONS_TALENT} /> wasn't used.</>, Vollmer),
    change(date(2023, 8, 10), <>Normalize pre-pull <SpellLink spell={TALENTS.BREATH_OF_EONS_TALENT} /> usage.</>, Vollmer),
    change(date(2023, 8, 1), <>Add missing trinkets to timeline.</>, Vollmer),
    change(date(2023, 8, 1), <>Implement <SpellLink spell={TALENTS.BREATH_OF_EONS_TALENT} /> module.</>, Vollmer),
    change(date(2023, 8, 1), <>Fix edgecase for <SpellLink spell={TALENTS.EBON_MIGHT_TALENT} /> being removed and re-applied instead of refreshed.</>, Vollmer),
    change(date(2023, 7, 25), <>Fix another edgecase with <SpellLink spell={TALENTS.PRESCIENCE_TALENT} /> being applied twice.</>, Vollmer),
    change(date(2023, 7, 22), <>Add <SpellLink spell={TALENTS.TIME_SKIP_TALENT} /> to channeled spells to fix downtime and timeline.</>, Vollmer),
    change(date(2023, 7, 22), <>Update performance check for <SpellLink spell={TALENTS.EBON_MIGHT_TALENT} />, <SpellLink spell={TALENTS.PRESCIENCE_TALENT} /> and <SpellLink spell={SPELLS.SHIFTING_SANDS_BUFF} /> .</>, Vollmer),
    change(date(2023, 7, 22), <>Fix <SpellLink spell={TALENTS.EBON_MIGHT_TALENT} /> sometimes being applied twice.</>, Vollmer),
    change(date(2023, 7, 22), <>Fix edgecase for pre-pull cast of <SpellLink spell={TALENTS.PRESCIENCE_TALENT} /> not being properly found.</>, Vollmer),
    change(date(2023, 7, 20), <>Add <SpellLink spell={TALENTS.PRESCIENCE_TALENT} /> to Cooldown Graph.</>, Vollmer),
    change(date(2023, 7, 20), <>Add support for pre-pull casts of <SpellLink spell={TALENTS.PRESCIENCE_TALENT} /> and <SpellLink spell={TALENTS.EBON_MIGHT_TALENT} />.</>, Vollmer),
    change(date(2023, 7, 19), <>Initial implementation of Augmentation</>, Vollmer),
];
