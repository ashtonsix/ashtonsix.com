import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import Input from './Input'

storiesOf('Input', module).add('full layout', () => {
  return (
    <div
      css={`
        padding: 20px;
      `}
    >
      <h1>Senserit dolore noster in sunt</h1>
      <h2>Senserit dolore noster in sunt</h2>
      <h3>Senserit dolore noster in sunt</h3>
      <Input.Text
        onChange={action('changed')}
        label="Password"
        notes="More than 6 characters"
      />
      <br />
      <Input.Checkbox onChange={action('changed')}>
        Fantastic option
      </Input.Checkbox>
      <br />
      <Input.Button onClick={action('clicked')}>Secondary</Input.Button>
      <Input.Button primary onClick={action('clicked')}>
        Sign Up
      </Input.Button>
      <hr />
      <h3>Without labels</h3>
      <Input.Text onChange={action('changed')} />
      <Input.Text onChange={action('changed')} />
      <br />
      <Input.Text onChange={action('changed')} />
      <hr />
      <h3>Disabled</h3>
      <Input.Text disabled onChange={action('changed')} label="Username" />
      <Input.Text
        disabled
        onChange={action('changed')}
        label="Password"
        notes="More than 6 characters"
      />
      <br />
      <Input.Checkbox onChange={action('changed')} disabled>
        Fantastic option
      </Input.Checkbox>
      <br />
      <Input.Button disabled onClick={action('clicked')}>
        Secondary
      </Input.Button>
      <Input.Button disabled primary onClick={action('clicked')}>
        Sign Up
      </Input.Button>
    </div>
  )
})
