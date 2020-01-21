import React from 'react'
import PropTypes from 'prop-types'
import { getPoNumber, getPaNumber, getPcNumber, getPpNumber, getPeNumber, getPcbisNumber } from 'rules/Money.rules'

import './Money.css'

const poImage = require("images/money/po.png");
const paImage = require("images/money/pa.png");
const pcImage = require("images/money/pc.png");
const ppImage = require("images/money/pp.png");
const peImage = require("images/money/pe.png");

const Money = ({ amount, fullDisplay, alternativeDisplay }) => {
    const po = getPoNumber(amount);
    const pa = getPaNumber(amount);
    const pc = getPcNumber(amount);

    const pp = getPpNumber(amount);
    const pe = getPeNumber(amount);
    const pcbis = getPcbisNumber(amount);
    
    return (
      alternativeDisplay
      ?<span className="money">
        { (fullDisplay || pp>0) && <span>{pp}<img src={ppImage} className="money-image" alt="pp" title="Pièces de platine" /></span> }
        { ( fullDisplay || (pp>0 && pe>0)) && <span>&nbsp;</span> }
        { (fullDisplay || pe>0) && <span>{pe}<img src={peImage} className="money-image" alt="pe" title="Pièces d'electron"/></span> }
        { ( fullDisplay || (pe>0 && pcbis>0)) && <span>&nbsp;</span> }
        { (fullDisplay || pcbis>0 || (pp===0 && pe===0)) && <span>{pc}<img src={pcImage} className="money-image" alt="pc" title="Pièces de cuivre"/></span> }
      </span>
      :<span className="money">
        { (fullDisplay || po>0) && <span>{po}<img src={poImage} className="money-image" alt="po" title="Pièces d'or" /></span> }
        { ( fullDisplay || (po>0 && pa>0)) && <span>&nbsp;</span> }
        { (fullDisplay || pa>0) && <span>{pa}<img src={paImage} className="money-image" alt="pa" title="Pièces d'argent"/></span> }
        { ( fullDisplay || (pa>0 && pc>0)) && <span>&nbsp;</span> }
        { (fullDisplay || pc>0 || (po===0 && pa===0)) && <span>{pc}<img src={pcImage} className="money-image" alt="pc" title="Pièces de cuivre"/></span> }
      </span>
    )
}

Money.propTypes = {
  amount: PropTypes.number,
  fullDisplay: PropTypes.bool.isRequired,
  alternativeDisplay: PropTypes.bool.isRequired
}

Money.defaultProps = {
  amount: 0,
  fullDisplay: false,
  alternativeDisplay: false
}

export default Money
