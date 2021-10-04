import React from 'react'
import Apollo from 'Apollo'
import gql from 'graphql-tag'
import {faSyncAlt, faShare} from '@fortawesome/free-solid-svg-icons'

import Input from 'components/Input'

const defaultServerName = gql`
  query defaultServerName {
    generateDefaultPrettyName {
      prettyName
      prettyNameLink
      instanceAddress
    }
  }
`

const fetchPrettyName = async () => {
  const {data} = await Apollo.client.query({
    query: defaultServerName,
    fetchPolicy: 'no-cache'
  })
  return data.generateDefaultPrettyName
}

const maybeOpenLink = el => {
  const parent = el.parentElement
  const grandparent = parent.parentElement
  const link = [el, parent, grandparent].find(el => el.href)
  if (link) window.open(link.href, '_blank')
}

class InstanceNameInput extends React.Component {
  state = {
    linkClicked: false,
    currentPrettyName: undefined,
    nextPrettyName: undefined
  }
  constructor() {
    super()

    this.updatePrettyName = this.updatePrettyName.bind(this)
  }
  async componentDidMount() {
    // eslint-disable-next-line
    const value = this.props?.field.value || this.props.value

    let data
    if (value) {
      data = {prettyName: value}
    } else {
      data = await fetchPrettyName()
    }
    this.setState({currentPrettyName: data})
    data = await fetchPrettyName()
    this.setState({nextPrettyName: data})
  }
  componentDidUpdate(prevProps) {
    if (prevProps.prettyNameKey !== this.props.prettyNameKey) {
      this.updatePrettyName()
    }
  }
  async updatePrettyName() {
    const {nextPrettyName} = this.state
    this.setState({
      linkClicked: false,
      currentPrettyName: nextPrettyName,
      nextPrettyName: undefined
    })
    const data = await fetchPrettyName()
    this.setState({nextPrettyName: data})
  }
  render() {
    // eslint-disable-next-line
    const value = this.props?.field.value || this.props.value
    let {onFocus, onBlur, prettyNameKey, instanceAddress, ...props} = this.props
    const {currentPrettyName = {}, linkClicked} = this.state
    const {prettyName = '', prettyNameLink} = currentPrettyName
    instanceAddress =
      instanceAddress || currentPrettyName.instanceAddress || ' '

    const iconIsLink = prettyNameLink && !linkClicked
    const right = iconIsLink
      ? {element: 'a', icon: faShare, href: prettyNameLink, target: '_blank'}
      : {icon: faSyncAlt}

    return (
      <Input.Text
        {...props}
        onFocus={onFocus}
        onBlur={onBlur}
        notes={instanceAddress}
        defaultValue={prettyName}
        box={{
          right: {
            ...right,
            interactive: true,
            onClick: e => {
              e.preventDefault()
              if (iconIsLink) {
                maybeOpenLink(e.target)
                this.setState({linkClicked: true})
              } else {
                this.updatePrettyName()
              }
            }
          }
        }}
      />
    )
  }
}

export default InstanceNameInput
