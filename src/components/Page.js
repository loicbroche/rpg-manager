import React, { Component } from "react"

class Page extends Component {
  componentDidMount() {
    document.title = this.props.title
  }

  render() {
    const PageComponent = this.props.component
    return <PageComponent {...this.props} />
  }
}

export default Page