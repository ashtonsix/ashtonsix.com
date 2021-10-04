import React from 'react'
import OneInstance from './OneInstance'
import stubs from '../../../stubs'

const instanceList = {
  instances: stubs.instanceList,
  notifications: [],
  user: stubs.user
}

const InstanceList = () => {
  const instances = instanceList?.instances?.data || []

  return (
    <>
      {instances
        .slice()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map((instance, index) => (
          <OneInstance
            key={instance.id}
            instance={instance}
            user={instanceList.user}
            index={index}
          />
        ))}
    </>
  )
}

export default InstanceList
