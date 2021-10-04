import React from 'react'
import {
  faUserSecret,
  faFlask,
  faBookOpen,
  faCheckDouble,
  faHatWizard,
  faMoneyBill,
  faHdd,
  faPaste,
  faKey
} from '@fortawesome/free-solid-svg-icons'
import {faAws} from '@fortawesome/free-brands-svg-icons'

import Input from 'components/Input'
import Section from 'pages/Dashboard/Section'
import stubs from 'stubs'

class JupyterLabNotebookToggle extends React.Component {
  state = {success: false}
  onAcknowledge() {
    this.setState({success: true})
  }
  render() {
    const {success} = this.state
    const {user} = this.props
    const {jupyterNotebookPreferred} = user
    const jupyter = jupyterNotebookPreferred ? 'Notebook' : 'Lab'
    const notJupyter = jupyterNotebookPreferred ? 'Lab' : 'Notebook'

    return (
      <Input.Button
        type="button"
        onClick={async () => {}}
        icon={
          success
            ? faCheckDouble
            : jupyterNotebookPreferred
            ? faFlask
            : faBookOpen
        }
        loading={false}
        disabled={false}
        error={null}
      >
        {success
          ? `Success! Using Jupyter ${jupyter}`
          : `Switch to Jupyter ${notJupyter}`}
      </Input.Button>
    )
  }
}

const LinkThatLooksLikeButton = ({to, icon, children}) => {
  return (
    <a
      href={to}
      onClick={e => {
        e.stopPropagation()
        e.preventDefault()
      }}
      tabIndex="-1"
      css={`
        & * {
          cursor: pointer !important;
        }
      `}
    >
      <Input.Button icon={icon}>{children}</Input.Button>
    </a>
  )
}

const RedeemAwsCoupon = () => (
  <LinkThatLooksLikeButton to="/redeem-aws-coupon" icon={faAws}>
    Redeem AWS Coupon
  </LinkThatLooksLikeButton>
)

const AccountDetails = () => (
  <LinkThatLooksLikeButton to="/account-settings" icon={faUserSecret}>
    Account Settings
  </LinkThatLooksLikeButton>
)

const ManagePayments = () => (
  <LinkThatLooksLikeButton to="/cost-report" icon={faMoneyBill}>
    Cost Report
  </LinkThatLooksLikeButton>
)

const ServerAddons = () => (
  <LinkThatLooksLikeButton to="/server-addons" icon={faHdd}>
    Server Types
  </LinkThatLooksLikeButton>
)

const SoftwareTemplates = () => (
  <LinkThatLooksLikeButton to="/software-templates" icon={faPaste}>
    Software Templates
  </LinkThatLooksLikeButton>
)

const AccessKey = (user = {}) => (
  <LinkThatLooksLikeButton
    to={
      user.onboardingSshResult ? '/replace-access-keys' : '/setup-access-keys'
    }
    icon={faKey}
  >
    {user.onboardingSshResult ? 'Replace Access Keys' : 'Setup Access Keys'}
  </LinkThatLooksLikeButton>
)

const Actions = () => {
  const user = stubs.user
  return (
    <Section
      id="account_details"
      title="Magician Zone"
      icon={faHatWizard}
      initialOpen
    >
      <div
        css={`
          margin-bottom: 15px;
        `}
      >
        <AccountDetails />
        <AccessKey user={user} />
        <ManagePayments />
        <ServerAddons />
        <SoftwareTemplates />
        <RedeemAwsCoupon />
        <JupyterLabNotebookToggle user={user} />
      </div>
    </Section>
  )
}

export default Actions
