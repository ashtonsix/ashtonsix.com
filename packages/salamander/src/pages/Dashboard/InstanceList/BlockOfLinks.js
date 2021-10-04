import React from 'react'
import Box from 'atoms/Box'
import Block from 'atoms/Block'
import Input from 'components/Input'
import Info from 'components/Info'

// prettier-ignore
const ignoreKnownHosts =
`Host *
  StrictHostKeyChecking=no
  UserKnownHostsFile=/dev/null`

const SshLink = ({instance, user}) => {
  const {instanceAddress} = instance
  const {onboardingSshResult} = user

  if (!onboardingSshResult) {
    return (
      <a
        href="/setup-access-keys"
        onClick={e => e.preventDefault()}
        tabIndex="-1"
        css={`
          & * {
            cursor: pointer !important;
          }
        `}
      >
        <Input.Button>Setup Access Key</Input.Button>
      </a>
    )
  }

  return (
    <Box>
      ssh ubuntu@{instanceAddress}
      <Info padding={{right: false}}>
        Tired of host key warnings? Add this to ".ssh/config":
        <br />
        <br />
        <code>
          <pre>{ignoreKnownHosts}</pre>
        </code>
      </Info>
    </Box>
  )
}

const JupyterButton = ({instance, user}) => {
  const {stateCurrent} = instance
  return (
    <Input.Button
      primary
      onClick={() => {}}
      disabled={stateCurrent !== 'AT_REST_ONLINE'}
    >
      {user.jupyterNotebookPreferred ? 'Jupyter Notebook' : 'Jupyter Lab'}
      {stateCurrent !== 'AT_REST_ONLINE' && (
        <Info padding={{right: false}}>
          You can't go to space without a rocket! (turn the server on first)
        </Info>
      )}
    </Input.Button>
  )
}

const BlockOfLinks = ({instance, user}) => {
  const {
    includesJupyterIntegration,
    instanceStartedCount,
    instanceAddress
  } = instance

  return (
    <Block
      width="single"
      padding="single"
      label="Links"
      extraCss={`width: 260px;`}
    >
      <Box>
        {instanceAddress ||
          (instanceStartedCount ? 'Address released' : 'No address yet')}
      </Box>
      {instanceAddress && (
        <>
          <br />
          <SshLink instance={instance} user={user} />
        </>
      )}
      <br />
      {includesJupyterIntegration && (
        <JupyterButton instance={instance} user={user} />
      )}
    </Block>
  )
}

export default BlockOfLinks
