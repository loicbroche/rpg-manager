import PropTypes from 'prop-types'

export const getPoNumber = (amount) => {
    return Math.trunc(amount/100);
}
getPoNumber.propTypes = {
    amount: PropTypes.number.isRequired
}

export const getNumberForPo = (po) => {
  return po*100;
}
getNumberForPo.propTypes = {
  po: PropTypes.number.isRequired
}

export const getPaNumber = (amount) => {
  return Math.trunc((amount%100)/10);
}
getPaNumber.propTypes = {
  amount: PropTypes.number.isRequired
}
export const getNumberForPa = (pa) => {
  return pa*10;
}
getNumberForPa.propTypes = {
  po: PropTypes.number.isRequired
}

export const getPcNumber = (amount) => {
  return amount%10;
}
getPcNumber.propTypes = {
  amount: PropTypes.number.isRequired
}

export const getPpNumber = (amount) => {
  return Math.trunc(amount/1000);
}
getPpNumber.propTypes = {
  amount: PropTypes.number.isRequired
}

export const getNumberForPp = (pp) => {
  return pp*1000;
}
getNumberForPp.propTypes = {
  pp: PropTypes.number.isRequired
}

export const getPeNumber = (amount) => {
  return Math.trunc((amount%1000)/50);
}
getPeNumber.propTypes = {
  amount: PropTypes.number.isRequired
}

export const getNumberForPe = (pe) => {
  return pe*50;
}
getNumberForPe.propTypes = {
  pe: PropTypes.number.isRequired
}

export const getPcbisNumber = (amount) => {
  return Math.trunc(amount%50);
}

getPcbisNumber.propTypes = {
  amount: PropTypes.number.isRequired
}
