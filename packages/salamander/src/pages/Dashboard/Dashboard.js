import React from 'react'
import Input from 'components/Input'
import {
  faUserSecret,
  faMoneyBill,
  faQuestion
} from '@fortawesome/free-solid-svg-icons'
import CreateInstance from './CreateInstance'
import InstanceList from './InstanceList'
import Actions from './Actions'

const LinkThatLooksLikeButton = ({to, icon, children}) => {
  return (
    <a
      href={to}
      onClick={e => e.preventDefault()}
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

const LittleActions = () => {
  return (
    <div>
      <LinkThatLooksLikeButton to="/account-settings" icon={faUserSecret}>
        Account Settings
      </LinkThatLooksLikeButton>
      <LinkThatLooksLikeButton to="/cost-report" icon={faMoneyBill}>
        Cost Report
      </LinkThatLooksLikeButton>
      <LinkThatLooksLikeButton to="/support" icon={faQuestion}>
        Help
      </LinkThatLooksLikeButton>
      <br />
      <br />
    </div>
  )
}

const Dashboard = () => {
  return (
    <div id="dashboard">
      <h1>Welcome to the Dashboard!</h1>
      <LittleActions />
      <CreateInstance />
      <InstanceList />
      <Actions />
    </div>
  )
}

export default Dashboard
