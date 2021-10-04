import React from 'react'
import Helmet from 'react-helmet'

const Loading = () => null

class Page extends React.Component {
  state = {component: null}
  async componentDidMount() {
    let component = await this.props.component()
    if (component.default) component = component.default
    this.setState({component})
  }
  render() {
    const {component: Component} = this.state
    const {title, component, ...props} = this.props

    return (
      <>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        {Component ? <Component {...props} /> : <Loading />}
      </>
    )
  }
}

export default Page
