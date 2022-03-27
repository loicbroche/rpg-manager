import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

import './ExpendableComponent.css'

class ExpendableComponent extends PureComponent {

  constructor(props) {
    super(props);
    this.state = { showContent: props.defaultExtended };
  }

  render() {
    const { extensorTitle, header, extensor, horizontal, reverse, relativeExpension} = this.props;
    const { showContent } = this.state;

    const title=showContent?"Masquer "+extensorTitle:"Ouvrir "+extensorTitle;
    const extensorElement = extensor || <span></span>

    return (
    <div className={`expendableComponent ${horizontal?"horizontal":""} ${reverse?"reverse":""}`}>
      <h1 className="expendable-header">
        {header}
        <span className={`activable extensor ${showContent?"opened":"closed"} ${horizontal?"horizontal":""} ${reverse?"reverse":""}`}
              role="button" onClick={this.onShowContentUpdate} title={title} >
          {extensorElement}
        </span>
      </h1>
      <div className={`expendable-container`}>
        <div className={`expendable-content ${showContent&&"show-content"} ${relativeExpension&&"relative-expension"}`}>
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
  defaultExtended: PropTypes.bool,
  horizontal: PropTypes.bool,
  reverse: PropTypes.bool
}

ExpendableComponent.defaultProps = {
  defaultExtended: false,
  horizontal: false,
  reverse: false,
  relativeExpension: false
}

export default ExpendableComponent