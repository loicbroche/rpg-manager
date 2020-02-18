import PropTypes from 'prop-types'
import { LevelPropType } from 'PropTypes';

export const getLevelNumber = (levels, XP) => {
  const maxLevel = levels && levels[levels.length-1];
  const maxXP = maxLevel && maxLevel.XP;
  const levelNumber = levels && Math.max(...levels.filter((lev) => lev && lev.XP <= Math.min(XP, maxXP)).map((lev) => lev.Level));

  return levelNumber;
}
getLevelNumber.propTypes = {
levels: PropTypes.arrayOf(LevelPropType).isRequired,
XP: PropTypes.number
}

export const getLevel = (levels, XP) => {
    const levelNumber = getLevelNumber(levels, XP);
    return levelNumber && levels[levelNumber-1];
}
getLevel.propTypes = {
  levels: PropTypes.arrayOf(LevelPropType).isRequired,
  XP: PropTypes.number
}

export const getNextLevel = (levels, XP) => {
  const maxLevel = levels && levels[levels.length-1];
  const maxXP = maxLevel && maxLevel.XP;
  const level = getLevelNumber(levels, XP);
  const nextLevel = XP>=maxXP?maxLevel: (levels && levels.find((lev) => lev && lev.Level === (level+1)));
  return nextLevel;
}
getNextLevel.propTypes = {
levels: PropTypes.arrayOf(LevelPropType).isRequired,
XP: PropTypes.number
}

getLevel.defaultPropTypes = {
  XP: 0
}
