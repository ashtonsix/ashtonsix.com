import React from 'react'
import {css} from 'emotion'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'
import {UnderLabel} from 'components/Input/Label'
import rhythm, {RhythmContext} from './rhythm'
import constants from './constants'

// api = {
//   preset: 'button' | 'input' | null
//   box: {
//     width: 'fit' | 'single' | 'double' | null
//     hitArea: 'single' | 'double' | 'padding' | {base, sides, top, bottom, left, right}
//     paddingInside: {base, sides, top, bottom, left, right}
//     paddingOutside: 'single' | 'double' | {base, sides, top, bottom, left, right}
//     error: boolean | string
//     disabled: boolean
//     extraCss: string
//     color: 'blue' | 'orange' | 'red' | 'black' | string,
//     always: ['dashed', 'solid', 'text', 'light', 'background'],
//     hover: ['dashed', 'solid', 'text', 'light', 'background'],
//     focus: ['dashed', 'solid', 'text', 'light', 'background'],
//     active: ['dashed', 'solid', 'text', 'light', 'background'],
//     element: string | React.Component,
//     innerElement: string | React.Component,
//     innerProps: {...props}
//     left: {element, icon, loading, interactive, ...props}
//     right: {element, icon, loading, interactive, ...props}
//     below: React.Element
//   },
//   children: React.Element,
//   ...props
// }

const basicPreset = {
  element: 'span',
  innerElement: 'span',
  width: 'fit',
  hitArea: 'padding',
  paddingInside: null,
  paddingOutside: 'double',
  error: false,
  disabled: false,
  extraCss: null,
  color: 'blue',
  always: [],
  hover: [],
  focus: [],
  active: []
}

const buttonPreset = {
  ...basicPreset,
  element: 'button',
  always: [],
  hover: ['dashed', 'text'],
  focus: ['solid', 'text', 'light'],
  active: ['solid', 'text', 'light']
}

const inputPreset = {
  ...basicPreset,
  element: 'label',
  innerElement: 'input',
  width: 'single',
  always: [],
  hover: [],
  focus: ['dashed', 'light'],
  active: []
}

const presets = {
  button: buttonPreset,
  input: inputPreset
}

const normaliseBoxProps = (preset, extra) => {
  preset = presets[preset] || basicPreset
  const next = {...preset, ...extra}
  let {hitArea, paddingInside, paddingOutside} = next

  if (next.paddingInside == null) {
    paddingInside = {base: 'single', sides: 'double'}
  }

  if (hitArea === 'padding') hitArea = paddingOutside
  next.hitArea = rhythm.clean(hitArea)
  next.paddingInside = rhythm.clean(paddingInside)
  next.paddingOutside = rhythm.clean(paddingOutside)

  return next
}

const buildStyles = ({
  width,
  hitArea,
  paddingInside,
  paddingOutside,
  error,
  disabled,
  color,
  always,
  hover,
  focus,
  active
}) => {
  color = constants.colors[color] || color
  paddingInside = rhythm.stringify(paddingInside)
  const hitAreaReversed = rhythm.stringify(hitArea, true)
  hitArea = rhythm.stringify(hitArea)

  const context = {always, hover, focus, active}

  const alwaysMap = {}
  ;(always || []).filter(f => f).forEach(f => (alwaysMap[f] = true))

  for (const k in context) {
    const featuresMap = {...alwaysMap}
    const features = context[k]
    ;(features || []).filter(f => f).forEach(f => (featuresMap[f] = true))
    let {dashed, solid, text, light, background} = featuresMap

    const style = css`
      color: ${text ? color : `inherit`};
      border: ${solid
        ? `1px solid ${color}`
        : dashed
          ? `1px dashed ${color}`
          : `1px solid #ddd`};
      background-color: ${background
        ? `${color}11`
        : light
          ? '#fafafa'
          : '#f7f7f7'};
      & ~ * svg {
        ${text && `color: ${color}`};
      }
    `
    context[k] = {style, features: featuresMap}
  }

  const style = css`
    display: block;
    position: relative;
    padding: ${hitArea};
    margin: ${hitAreaReversed};
    background-color: #ffffff00;
    border: 0;
    &:focus,
    & > *[data-box]:focus {
      outline: none;
    }
    & > *[data-box] {
      display: inline-block;
      position: relative;
      width: 100%;
      padding: ${paddingInside};
      border-radius: 4px;
      cursor: default;
      ${context.always.style};
      ${error && `border: 1px solid ${constants.colors.red}`};
      & ~ * svg {
        ${context.always.features.text && `color: ${color}cc`};
        vertical-align: middle;
      }
    }
    &:hover > *[data-box] {
      ${context.hover.style};
    }
    &:focus > *[data-box],
    & > *[data-box]:focus {
      ${context.focus.style};
    }
    &:active > *[data-box],
    & > *[data-box]:active {
      ${context.active.style};
    }
    &[disabled] {
      cursor: not-allowed;
    }
    &[disabled] > *[data-box] {
      color: ${context.always.features.text
        ? `${color}cc`
        : `rgba(0, 0, 0, 0.5)`};
      border: 1px solid #ddd;
      background-color: #f2f2f2;
      cursor: not-allowed;
    }
    &[disabled] > *[data-box] ~ * svg {
      color: ${context.always.features.text
        ? `${color}99`
        : `rgba(0, 0, 0, 0.5)`};
    }
  `

  return style
}

const Padding = ({box, children}) => {
  let {width, paddingOutside, extraCss} = box
  const po = paddingOutside
  const lb = rhythm.lengths.block
  const paddingReversed = `${po.left} + ${po.right}`
  const singleWidth = rhythm.combineOne(
    `calc(${lb.single} + ${paddingReversed})`
  )
  const doubleWidth = rhythm.combineOne(
    `calc(${lb.double} + ${paddingReversed} + ${paddingReversed})`
  )

  const display = width === 'double' ? 'block' : 'inline-block'

  if (!['single', 'double'].includes(width)) width = null
  else if (width === 'single') width = `width: ${singleWidth}`
  else if (width === 'double') {
    width = css`
      width: 100%;
      min-width: ${singleWidth};
      max-width: ${doubleWidth};
    `
  }

  return (
    <span
      css={`
        display: ${display};
        ${width};
        padding: ${rhythm.stringify(paddingOutside)};
        ${extraCss};
      `}
    >
      {children}
    </span>
  )
}

const Box = ({box, children, ...props}) => {
  if (children == null || children === false) children = []
  if (!(children instanceof Array)) children = [children]
  const style = buildStyles(box)
  const {element, innerElement, innerProps, below, left, right} = box

  return (
    <Padding box={box}>
      {React.createElement(
        element,
        {className: style, 'data-box': 'true', ...props},
        React.createElement(
          innerElement,
          {'data-box': 'true', ...innerProps},
          ...children
        ),
        left || false,
        right || false
      )}
      {below || false}
    </Padding>
  )
}

const Icon = ({side, element, icon, loading, interactive, box, ...props}) => {
  if (!element) element = 'span'
  if (loading) icon = faSpinner
  const left = side === 'left'

  const lv = rhythm.lengths.vertical.single
  const lh = rhythm.lengths.horizontal.double
  const lhs = rhythm.combineOne(`${lh} + -4px`)
  const paddingStyle = rhythm.stringify({
    top: lv,
    bottom: lv,
    left: left ? lh : lhs,
    right: left ? lhs : lh
  })
  const ha = box.hitArea
  const color = constants.colors[box.color] || box.color

  const style = css`
    position: absolute;
    ${left ? `left: ${ha.left}` : `right: ${ha.right}`};
    top: ${ha.top};
    bottom: ${ha.bottom};
    padding: ${paddingStyle};
    color: inherit;
    &:hover,
    &:focus,
    &:active {
      ${interactive && `color: ${color}`};
    }
  `

  return React.createElement(
    element,
    {className: style, ...props},
    <FontAwesomeIcon icon={icon} pulse={loading} />
  )
}

const BoxWithExtras = ({preset, box = {}, children, ...props}) => {
  box = normaliseBoxProps(preset, box)

  const i = i => !!(i && (i.icon || i.loading))
  if (i(box.left)) {
    box.paddingInside.left = `calc(${box.paddingInside.left} + 20px)`
    box.left = <Icon side="left" box={box} {...box.left} />
  } else box.left = false
  if (i(box.right)) {
    box.paddingInside.right = `calc(${box.paddingInside.right} + 20px)`
    box.right = <Icon side="right" box={box} {...box.right} />
  } else box.right = false

  box.below = (
    <>
      <UnderLabel error={box.error} />
      {!!box.below && box.below}
    </>
  )

  return (
    <Box box={box} {...props}>
      {children}
    </Box>
  )
}

const BoxWithSmartDefaults = props => {
  return (
    <RhythmContext.Consumer>
      {context => {
        let box = props.box || {}
        let paddingOutside = box.paddingOutside
        if (!paddingOutside) {
          if (context.block && context.block.padding === 'single') {
            paddingOutside = 'single'
          } else {
            paddingOutside = 'double'
          }
          box = {...box, paddingOutside}
        }
        return <BoxWithExtras {...props} box={box} />
      }}
    </RhythmContext.Consumer>
  )
}

export default BoxWithSmartDefaults
