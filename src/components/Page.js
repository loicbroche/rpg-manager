import React, { PureComponent } from "react"

class Page extends PureComponent {
  componentDidMount() {
    document.title = this.props.title
  }

  render() {
    const PageComponent = this.props.component
    return <PageComponent {...this.props} />
  }
}

export default Page