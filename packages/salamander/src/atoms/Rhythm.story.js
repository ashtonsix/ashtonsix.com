import React from 'react'
import {css} from 'emotion'
import {storiesOf} from '@storybook/react'
import Box from './Box'
import Block from './Block'

const StorybookContainer = ({children}) => (
  <div
    css={`
      padding: 20px;
    `}
  >
    {children}
  </div>
)

storiesOf('Rhythm', module).add('everything', () => {
  return (
    <StorybookContainer>
      <h3>Double spacing</h3>
      <p>This looks pretty; but,</p>
      <Block width="double" padding="double">
        <Box preset="input" box={{width: 'double'}} />
        <Box preset="input" />
        <Box preset="input" />
        <Box>Huge</Box>
        <Box>Monkey</Box>
      </Block>
      <h3>Single spacing</h3>
      <p>Group elements when uniform spacing exceeds it's cognitive capacity</p>
      <Block width="single" padding="single">
        <Box box={{width: 'single'}}>
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean
          libero, at dapibus lobortis.
        </Box>
        <Box preset="input" />
        <Box>Tiny</Box>
        <Box>Monkey</Box>
      </Block>
      <Block width="single" padding="single">
        <Box preset="input" />
        <Box>Lorem ipsum</Box>
        <Box>Dolor sit</Box>
        <Box>Consectetur</Box>
        <Box>Elit</Box>
        <Box>Adipiscing</Box>
      </Block>
    </StorybookContainer>
  )
})
