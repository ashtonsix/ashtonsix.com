import React from 'react'
import {faUserAstronaut, faSkull} from '@fortawesome/free-solid-svg-icons'
import {distanceInWordsStrict, differenceInHours} from 'date-fns'
import kebab from 'misc/kebab'
import history from 'misc/history'

import Box from 'atoms/Box'
import Block from 'atoms/Block'
import Section from 'pages/Dashboard/Section'

import InstanceTypeSelector from 'pages/Dashboard/CreateInstance/InstanceTypeSelector'
import BlockOfActions from './BlockOfActions'
import BlockOfLinks from './BlockOfLinks'

class TerminateCountdown extends React.Component {
  state = {countdown: null}
  interval = null
  updateCountdown() {
    const then = new Date(this.props.removeScheduledAt)
    const now = new Date()
    let countdown = distanceInWordsStrict(then, now)
    if (countdown.includes('day')) {
      countdown = Math.abs(differenceInHours(then, now)) + ' hours'
    }
    if (now > then || countdown.startsWith('0')) {
      if (countdown !== 'a moment') {
        setTimeout(() => {
          // apollo-cache doesn't seem to handle document removal, so we're
          // doing this with setState
          this.props.onRemove && this.props.onRemove()
        }, 1500)
      }
      countdown = 'a moment'
    }
    this.setState({countdown})
  }
  componentDidMount() {
    this.updateCountdown()
    this.interval = setInterval(() => this.updateCountdown(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.countdown !== this.state.countdown
  }
  render() {
    const {prettyName} = this.props
    const {countdown} = this.state
    if (!countdown) return null
    return (
      <p>
        {prettyName} will be destroyed in {countdown}; and once destroyed,
        recovering data from {prettyName} will be impossible. Click "Restore
        Server" to keep {prettyName} alive.
      </p>
    )
  }
}

const DefaultInstanceView = ({instance, user, actions}) => {
  const {removeScheduledAt, prettyName, instanceType, storageSize} = instance
  return (
    <>
      {!!removeScheduledAt && (
        <TerminateCountdown
          instanceId={instance.id}
          prettyName={prettyName}
          removeScheduledAt={removeScheduledAt}
          onRemove={actions.remove}
        />
      )}
      <Block width="single" padding="single" label="Hardware">
        <InstanceTypeSelector
          //types={[instanceType.split('.')[0]]}
          types={[instanceType.slice(0, 2)]}
          value={instanceType}
          sizes={false}
        />
      </Block>
      <BlockOfActions instance={instance} onEdit={actions.edit} />
      <BlockOfLinks instance={instance} user={user} />
      <br />
      <Block width="single" padding="single" label="Storage">
        <Box>
          {storageSize}GB {instanceType.startsWith('m5') ? 'NVMe' : 'SSD'}
        </Box>
      </Block>
    </>
  )
}

class OneInstance extends React.Component {
  state = {removed: false, editing: false}
  initialHash = null
  constructor(props) {
    super()
    this.initialHash = history.location.hash
    const twoMinutes = 2 * 60 * 1000
    const createdAgo = new Date() - new Date(props.instance.createdAt)
    this.createdRecently = createdAgo < twoMinutes
  }
  render() {
    const {instance, user, index} = this.props
    const {
      removeScheduledAt,
      prettyName,
      prettyNameLink,
      stateCurrent,
      stateNext
    } = instance
    const openByDefault =
      (index === 0 && !this.initialHash) || stateCurrent || this.createdRecently

    if (this.state.removed) return null

    return (
      <Section
        id={kebab(prettyName, {char: '_'})}
        title={prettyName}
        icon={removeScheduledAt ? faSkull : faUserAstronaut}
        iconColor={
          removeScheduledAt
            ? 'rgba(0, 0, 0, 0.85)'
            : stateCurrent === 'AT_REST_ONLINE' && !stateNext
            ? '#1890ff'
            : '#f37a49'
        }
        externalLink={prettyNameLink}
        key={instance.id}
        initialOpen={!removeScheduledAt && openByDefault}
      >
        <DefaultInstanceView
          instance={instance}
          user={user}
          actions={{
            remove: () => this.setState({removed: true}),
            edit: () => this.setState({editing: true})
          }}
        />
      </Section>
    )
  }
}

export default OneInstance
