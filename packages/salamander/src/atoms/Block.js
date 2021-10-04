import React from 'react'
import Label from 'components/Input/Label'
import rhythm, {RhythmContext} from './rhythm'

const paddingPresets = {
  inside: {
    single: rhythm.clean({base: '0px', sides: 'single'}),
    double: rhythm.clean({base: '0px', sides: 'double'})
  },
  outside: {
    single: rhythm.clean({base: '0px', sides: 'single'}),
    double: rhythm.clean({base: '0px'})
  }
}
const pp = paddingPresets

const Block = ({children, padding, width, extraCss}) => {
  const paddingInside = pp.inside[padding] || pp.inside.single
  const paddingOutside = pp.outside[padding] || pp.outside.single

  const wo = width
  const pi = paddingInside
  const po = paddingOutside
  const pis = `${pi.left} + ${pi.right}`
  const pos = `${po.left} + ${po.right}`

  const double = width === 'double'
  width = rhythm.lengths.block[width] || rhythm.lengths.block.single
  width = rhythm.combineOne(
    `calc(${width} + ${pis} + ${double ? pis : '0px'} + ${pos})`
  )
  return (
    <div
      css={`
        display: inline-block;
        vertical-align: top;
        width: ${width};
        padding: ${rhythm.stringify(po)};
        ${extraCss};
      `}
    >
      <RhythmContext.Provider value={{block: {width: wo, padding}}}>
        {children}
      </RhythmContext.Provider>
    </div>
  )
}

const BlockWithLabel = ({label, notes, children, padding, ...props}) => {
  const paddingOutside = pp.outside[padding] || pp.outside.single
  const po = paddingOutside

  return (
    <Block {...props} padding={padding}>
      {!!(label || notes) && (
        <div
          css={`
            padding: ${rhythm.stringify(po)};
          `}
        >
          <Label label={label} notes={notes} />
        </div>
      )}
      {children}
    </Block>
  )
}

export default BlockWithLabel
