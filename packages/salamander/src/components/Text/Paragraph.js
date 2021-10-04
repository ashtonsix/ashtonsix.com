import React from 'react'

const Paragraph = ({smallSpacing, smallWidth, children}) => (
  <p
    css={`
      ${!!smallSpacing && `margin-bottom: 0.25em`};
      ${!!smallWidth && `max-width: 620px`};
    `}
  >
    {children}
  </p>
)

export default Paragraph
