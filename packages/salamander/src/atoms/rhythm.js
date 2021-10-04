import React from 'react'

const lengths = {
  vertical: {single: '4px', double: '8px'},
  horizontal: {single: '6px', double: '12px'},
  block: {single: '220px', double: '440px'}
}
const lv = lengths.vertical
const lh = lengths.horizontal

// prettier-ignore
const padding = {
  single: {top: lv.single, bottom: lv.single, left: lh.single, right: lh.single},
  double: {top: lv.double, bottom: lv.double, left: lh.double, right: lh.double},
}

// "10px" => ["10", "px"]
const unit = /(-?\d+\.?\d*)([^\d.]*)/
const parseUnit = v => (v.trim().match(unit) || []).slice(1)

// "calc(50px + -10px + 10%)" => "calc(40px + 10%)"
const combineOne = str => {
  const unitMap = {}
  str = str.replace('calc(', '')
  str = str.replace(')', '')
  str = str.split('+')
  str.forEach(str => {
    const [value, unit] = parseUnit(str)
    if (!unitMap[unit]) unitMap[unit] = 0
    unitMap[unit] += parseFloat(value, 10) || 0
  })

  str = Object.keys(unitMap)
    .filter(k => unitMap[k])
    .map(k => `${unitMap[k]}${k}`)
    .join(' + ')

  if (str.includes('+')) str = `calc(${str})`
  return str
}

const combine = (s0, s1) => ({
  top: combineOne(`${s0.top} + ${s1.top}`),
  bottom: combineOne(`${s0.bottom} + ${s1.bottom}`),
  left: combineOne(`${s0.left} + ${s1.left}`),
  right: combineOne(`${s0.right} + ${s1.right}`)
})

const clean = size => {
  const next = {}
  if (typeof size === 'string') size = {base: size}
  if (size.base) {
    next.top = size.base
    next.bottom = size.base
    next.left = size.base
    next.right = size.base
  }
  if (size.sides) {
    next.left = size.sides
    next.right = size.sides
  }
  if (size.top) next.top = size.top
  if (size.bottom) next.bottom = size.bottom
  if (size.left) next.left = size.left
  if (size.right) next.right = size.right

  if (next.top === 'single') next.top = padding.single.top
  if (next.top === 'double') next.top = padding.double.top
  if (next.bottom === 'single') next.bottom = padding.single.bottom
  if (next.bottom === 'double') next.bottom = padding.double.bottom
  if (next.left === 'single') next.left = padding.single.left
  if (next.left === 'double') next.left = padding.double.left
  if (next.right === 'single') next.right = padding.single.right
  if (next.right === 'double') next.right = padding.double.right

  return next
}

const n = (v, negative) => `${negative ? '-' : ''}${v}`
const stringify = (size, negative) => {
  const top = n(size.top, negative)
  const right = n(size.right, negative)
  const bottom = n(size.bottom, negative)
  const left = n(size.left, negative)
  return `${top} ${right} ${bottom} ${left}`
}

const RhythmContext = React.createContext('rhythm')

const rhythm = {
  lengths,
  padding,
  parseUnit,
  combineOne,
  combine,
  clean,
  stringify
}

export default rhythm
export {RhythmContext}
