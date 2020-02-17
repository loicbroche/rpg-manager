import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './ExpendableComponent.css'

const defaultExpendImage = require('images/details.png');

class ExpendableComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { showContent: false };
  }

  render() {
    const { extensorTitle, header, extensor, horizontal, reverse} = this.props;
    const { showContent } = this.state;

    const title=showContent?"Masquer "+extensorTitle:"Ouvrir "+extensorTitle;
    const extensorElement = extensor || <img src={defaultExpendImage} alt={title} />

    return (
    <div className={`expendableComponent ${horizontal?"horizontal":""} ${reverse?"reverse":""}`}>
      <h1 className="expendable-header">
        {header}
        <span className={`activable extensor ${showContent?"opened":"closed"} ${horizontal?"horizontal":""} ${reverse?"reverse":""}`} onClick={this.onShowContentUpdate} title={title} >
          {extensorElement}
        </span>
      </h1>
      <div className={`expendable-container`}>
        <div className={`expendable-content ${showContent&&"show-content"}`}>
            {this.props.children}
        </div>
      </div>
    </div>
  )
  }

  // Arrow fx for binding
  onShowContentUpdate = () => {
    this.setState({showContent: !this.state.showContent})
  }
}

ExpendableComponent.propTypes = {
  extensorTitle: PropTypes.string,
  horizontal: PropTypes.bool,
  reverse: PropTypes.bool
}

ExpendableComponent.dzfaultProps = {
  horizontal: false,
  reverse: false
}

export default ExpendableComponent