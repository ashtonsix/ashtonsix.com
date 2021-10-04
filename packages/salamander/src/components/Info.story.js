import React from 'react'
import {storiesOf} from '@storybook/react'
import Info from './Info'

storiesOf('Info', module).add('placements', () => {
  return (
    <div
      css={`
        padding: 20px;
      `}
    >
      <Info placement="top">
        Magna offendit coniunctione a a sed philosophari sed noster illustriora
        expetendis fore non incurreret sempiternum eu iis te ipsum commodo.
      </Info>
      <br />
      <br />
      <Info exclamation placement="right">
        Fabulas export probant, non mandaremus transferrem, eram iudicem et
        magna nulla, est quae labore eu consequat.
      </Info>
      <br />
      <br />
      <Info placement="bottom">
        Possumus dolore e cupidatat firmissimum. Esse ubi fabulas o noster, ex o
        amet appellat non voluptate anim litteris sed nam iudicem eruditionem.
      </Info>
      <br />
      <div
        css={`
          padding-left: 200px;
        `}
      >
        <Info placement="left">Eiusmod e anim.</Info>
      </div>
    </div>
  )
})
