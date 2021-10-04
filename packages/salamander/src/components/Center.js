import React from 'react'

const Center = ({extraPadding, children}) => (
  <div
    css={`
      display: flex;
      justify-content: center;
    `}
  >
    <div
      css={`
        display: inline-block;
      `}
    >
      {children}
    </div>
  </div>
)

export default Center
