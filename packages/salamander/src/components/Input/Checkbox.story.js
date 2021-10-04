import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import Text from '../Text'
import Input from './Input'

storiesOf('Checkbox', module).add('basic usage', () => {
  return (
    <div
      css={`
        padding: 20px;
      `}
    >
      <Input.Checkbox onChange={action('changed')}>
        Fantastic option
      </Input.Checkbox>
      <hr />
      <Input.Checkbox.Group>
        <Input.Checkbox onChange={action('changed')}>
          Another fantastic option
        </Input.Checkbox>
        <br />
        <Input.Checkbox onChange={action('changed')}>
          Have you considered...?
        </Input.Checkbox>
      </Input.Checkbox.Group>
      <Input.Button disabled onClick={action('clicked')}>
        Sign Up
      </Input.Button>
      <hr />
      <Input.Checkbox.Group label="Preferred Activity">
        <Input.Checkbox onChange={action('changed')}>
          Kangaroo safari
        </Input.Checkbox>
        <br />
        <Input.Checkbox onChange={action('changed')}>
          Would rather eat my <Text.Link>breakfast</Text.Link> than a shoe
        </Input.Checkbox>
      </Input.Checkbox.Group>
      <Input.Button disabled onClick={action('clicked')}>
        Do the thing
      </Input.Button>
    </div>
  )
})
