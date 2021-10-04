import React from 'react'
import Box from 'atoms/Box'

const Button = ({
  children,
  primary,
  element = 'button',
  icon,
  error,
  loading,
  box,
  ...props
}) => {
  return (
    <Box
      preset="button"
      box={{
        element,
        error,
        always: primary ? ['text'] : undefined,
        left: {icon, loading},
        ...box
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

export default Button
