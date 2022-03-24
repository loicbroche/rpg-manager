import React from 'react'
import PropTypes from 'prop-types'
import { getPoNumber, getNumberForPo, getPaNumber, getNumberForPa, getPcNumber,
        getPpNumber, getNumberForPp, getPeNumber, getNumberForPe, getPcbisNumber } from 'rules/Money.rules'

import './Money.css'

const poImage = require("images/money/po.png");
const paImage = require("images/money/pa.png");
const pcImage = require("images/money/pc.png");
const ppImage = require("images/money/pp.png");
const peImage = require("images/money/pe.png");

const Money = ({ id, amount, fullDisplay, alternativeDisplay, onChange }) => {
    const po = getPoNumber(amount);
    const pa = getPaNumber(amount);
    const pc = getPcNumber(amount);

    const pp = getPpNumber(amount);
    const pe = getPeNumber(amount);
    const pcbis = getPcbisNumber(amount);
    
    return (
      alternativeDisplay
      ?<span className="money">
        { (fullDisplay || pp>0) && <span>
            <input id={id+"_ppInput"} type="number" dir="rtl" min={0} step={1} value={pp} className={onChange?"activable transparent":""} disabled={!onChange}
                    style={{width: getWidth(pp)}}
                    onChange={(event) => {if (onChange) { onChange(getNumberForPp(event.target.value)+getNumberForPe(pe)+pcbis); }}}/>
            <img src={ppImage} className="money-image" alt="pp" title="Pièces de platine" />
          </span> }
        { ( fullDisplay || (pp>0 && pe>0)) && <span>&nbsp;</span> }
        { (fullDisplay || pe>0) && <span>
            <input id={id+"_peInput"} type="number" dir="rtl" step={1} value={pe} className={onChange?"activable transparent":""} disabled={!onChange}
                    style={{width: getWidth(pe)}}
                    onChange={(event) => {if (onChange) { onChange(getNumberForPp(pp)+getNumberForPe(event.target.value)+pcbis); }}}/>
            <img src={peImage} className="money-image" alt="pe" title="Pièces d'electron"/>
          </span> }
        { ( fullDisplay || (pe>0 && pcbis>0)) && <span>&nbsp;</span> }
        { (fullDisplay || pcbis>0 || (pp===0 && pe===0)) && <span>
            <input id={id+"_pcbisInput"} type="number" dir="rtl" step={1} value={pcbis} className={onChange?"activable transparent":""} disabled={!onChange}
                    style={{width: getWidth(pcbis)}}
                    onChange={(event) => {if (onChange) { onChange(getNumberForPp(pp)+getNumberForPe(pe)+(parseInt(event.target.value)||0)); }}}/>
            <img src={pcImage} className="money-image" alt="pc" title="Pièces de cuivre"/>
          </span> }
      </span>
      :<span className="money">
        { (fullDisplay || po>0) && <span>
            <input id={id+"_poInput"} type="number" dir="rtl" min={0} step={1} value={po} className={onChange?"activable transparent":""} disabled={!onChange}
                    style={{width: getWidth(po)}}
                    onChange={(event) => {if (onChange) { onChange(getNumberForPo(event.target.value)+getNumberForPa(pa)+pc); }}} />
            <img src={poImage} className="money-image" alt="po" title="Pièces d'or" />
        </span> }
        { ( fullDisplay || (po>0 && pa>0)) && <span>&nbsp;</span> }
        { (fullDisplay || pa>0) && <span>
            <input id={id+"_paInput"} type="number" dir="rtl" step={1} value={pa} className={onChange?"activable transparent":""} disabled={!onChange}
                    style={{width: getWidth(pa)}}
                    onChange={(event) => {if (onChange) { onChange(getNumberForPo(po)+getNumberForPa(event.target.value)+pc); }}}/>
            <img src={paImage} className="money-image" alt="pa" title="Pièces d'argent"/>
        </span> }
        { ( fullDisplay || (pa>0 && pc>0)) && <span>&nbsp;</span> }
        { (fullDisplay || pc>0 || (po===0 && pa===0)) && <span>
            <input id={id+"_pcInput"} type="number" dir="rtl" step={1} value={pc} className={onChange?"activable transparent":""} disabled={!onChange}
                    style={{width: getWidth(pc)}}
                    onChange={(event) => {if (onChange) { onChange(getNumberForPo(po)+getNumberForPa(pa)+(parseInt(event.target.value)||0)); }}}/>
            <img src={pcImage} className="money-image" alt="pc" title="Pièces de cuivre"/>
        </span> }
      </span>
    )
}

const DIGIT_WIDTH = 0.7;

function getWidth (value) {
  return ((""+value).length* DIGIT_WIDTH) + 'rem';
}

Money.propTypes = {
  amount: PropTypes.number,
  fullDisplay: PropTypes.bool.isRequired,
  alternativeDisplay: PropTypes.bool.isRequired,
  onChange: PropTypes.func
}

Money.defaultProps = {
  amount: 0,
  fullDisplay: false,
  alternativeDisplay: false
}

export default Money
