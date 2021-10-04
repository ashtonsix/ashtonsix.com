import React from 'react'
import {
  faMoon,
  faPlug,
  faSkull,
  faChild,
  faWrench
} from '@fortawesome/free-solid-svg-icons'

import Box from 'atoms/Box'
import Block from 'atoms/Block'
import Input from 'components/Input'
import Info from 'components/Info'

const UpdateInstanceButton = ({
  instanceId,
  mutation,
  loading: l,
  disabled,
  children,
  ...props
}) => {
  const loading = l
  return (
    <Input.Button
      disabled={disabled || loading}
      loading={loading}
      error={null}
      onClick={() => {}}
      {...props}
    >
      {children}
    </Input.Button>
  )
}

const StatusIndicator = ({instance}) => {
  const {removeScheduledAt, stateCurrent, stateNext} = instance

  const state = stateNext || stateCurrent
  const labelMap = {
    AT_REST_CREATED: 'Stopped',
    AT_REST_OFFLINE: 'Stopped',
    AT_REST_ONLINE: 'Online',
    AT_REST_TERMINATED: 'Dying',

    CREATE_LAUNCH_INSTANCE: 'Offline - requesting server',
    CREATE_CONFIGURE: 'Offline - waiting for Jupyter',

    START_LAUNCH_INSTANCE: 'Offline - requesting server',
    START_CONFIGURE: 'Offline - waiting for Jupyter',
    START_DELETE_SNAPSHOT: 'Offline - waiting for Jupyter',

    STOP_TERMINATE_INSTANCE: 'Offline - stopping server',
    STOP_CREATE_SNAPSHOT: 'Offline - moving storage',
    STOP_CREATE_IMAGE: 'Offline - moving storage',
    STOP_DELETE_VOLUME: 'Offline - moving storage',

    TERMINATE_DELETE_SNAPSHOT: 'Dying'
  }

  let label = labelMap[state]
  if (removeScheduledAt) label = 'Dying'
  const movingStorage = label.includes('moving storage')

  return (
    <Box
      box={{
        color: removeScheduledAt
          ? 'black'
          : stateCurrent === 'AT_REST_ONLINE' && !stateNext
          ? 'blue'
          : 'orange',
        always: ['solid', 'text', 'background']
      }}
    >
      {label}
      {movingStorage && (
        <Info padding={{right: false}}>This step takes around 5 minutes</Info>
      )}
    </Box>
  )
}

const TogglePowerButton = ({instance}) => {
  const {id, stateCurrent, stateNext} = instance
  const state = stateNext || stateCurrent
  if (state.startsWith('CREATE')) return null

  const shouldStop = state === 'AT_REST_ONLINE' || state.startsWith('STOP')

  return (
    <UpdateInstanceButton
      primary={!shouldStop}
      instanceId={id}
      mutation={() => {}}
      loading={!!stateNext}
      icon={shouldStop ? faMoon : faPlug}
    >
      {shouldStop ? 'Stop Server' : 'Start Server'}
    </UpdateInstanceButton>
  )
}

const DestroyInstanceButton = ({instance}) => {
  const {stateNext} = instance
  return (
    <UpdateInstanceButton
      instanceId={instance.id}
      mutation={() => {}}
      disabled={!!stateNext}
      box={{color: '#f31649'}}
      icon={faSkull}
    >
      Destroy
      <Info padding={{right: false}}>
        <strong>Permenantly</strong> removes your server. You get 36 hours to
        undo this.
      </Info>
    </UpdateInstanceButton>
  )
}

const RestoreInstanceButton = ({instance}) => {
  return (
    <Input.Button
      primary
      error={null}
      onClick={() => {}}
      disabled={false}
      loading={false}
      icon={faChild}
    >
      Restore Server
    </Input.Button>
  )
}

const EditButton = ({instance, onEdit}) => {
  const {stateCurrent, stateNext} = instance

  return (
    <Input.Button
      onClick={onEdit}
      disabled={
        !!stateNext ||
        !['AT_REST_CREATED', 'AT_REST_OFFLINE'].includes(stateCurrent)
      }
      icon={faWrench}
    >
      Modify
    </Input.Button>
  )
}

const BlockOfActions = ({instance, onEdit}) => {
  return (
    <Block width="single" padding="single" label="Status">
      <StatusIndicator instance={instance} />
      {instance.removeScheduledAt ? (
        <RestoreInstanceButton instance={instance} />
      ) : (
        <>
          <TogglePowerButton instance={instance} />
          <EditButton instance={instance} onEdit={onEdit} />
          <DestroyInstanceButton instance={instance} />
        </>
      )}
    </Block>
  )
}

export default BlockOfActions
