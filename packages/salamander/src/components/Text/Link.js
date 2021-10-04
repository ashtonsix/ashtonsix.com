import React from 'react'
import {Link} from 'react-router-dom'
import {css} from 'emotion'
import styled from 'react-emotion'

const style = css`
  color: #1890ff;
  text-decoration: none;
  padding: 4px;
  margin: -4px;
  display: inline-block;

  & > h1,
  & > h2,
  & > h3,
  & > h4,
  & > h5,
  & > h6 {
    border-bottom: 1px solid transparent;
    color: #037bff;
  }

  &:hover > *,
  &:focus > * {
    border-bottom: 1px dashed #1890ff;
  }

  &:active > * {
    border-bottom: 1px solid #1890ff;
  }

  &:active,
  &:hover,
  &:focus {
    outline: 0;
    text-decoration: none;
  }

  &[disabled],
  &[disabled] > * {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
    pointer-events: none;
  }
`

const StyledCache = new Map()

// Increases hit area and positions :hover underline correctly
const StyledLink = ({
  children,
  to,
  external,
  nonfunctional,
  outerElement = Link,
  innerElement = 'span',
  ...props
}) => {
  if (external && outerElement === Link) outerElement = 'a'
  if (external) external = {target: '_blank'}
  let tok = outerElement === 'a' ? 'href' : 'to'

  if (StyledCache.has(outerElement)) {
    outerElement = StyledCache.get(outerElement)
  } else {
    const tmp = styled(outerElement)(style)
    StyledCache[outerElement] = tmp
    outerElement = tmp
  }

  if (nonfunctional) props.onClick = e => e.preventDefault()

  return React.createElement(
    outerElement,
    {...props, ...external, [tok]: to},
    React.createElement(innerElement, {}, <>{children}</>)
  )
}
StyledLink.Raw = Link

export default StyledLink
