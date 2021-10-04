import React from 'react'

const Label = ({disabled, label, notes, padLeft}) => {
  if (!label && !notes) return null
  if (!label && notes) {
    label = notes
    notes = null
  }

  return (
    <div
      data-label
      css={`
        margin-bottom: 0.5em;
        ${padLeft && `padding-left: 12px`};
      `}
    >
      <strong
        css={`
          display: block;
          font-family: 'Nunito', sans-serif;
          font-size: 1.2em;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.85);
          ${disabled && `color: rgba(0, 0, 0, 0.7)`};
        `}
      >
        {label}
      </strong>
      {!!notes && (
        <span
          css={`
            display: block;
            font-style: italic;
            font-size: 0.85em;
            margin-bottom: 0.5em;
            ${disabled && `color: rgba(0, 0, 0, 0.5)`};
          `}
        >
          {notes}
        </span>
      )}
    </div>
  )
}

const normalizeError = error => {
  if (!error) return null
  if (error.message) error = error.message
  if (typeof error !== 'string') return null
  error = error.replace('GraphQL error: ', '')
  if (error === '[object Object]') return null
  return error
}

const UnderLabel = ({error}) => {
  if (error instanceof Array)
    error = error
      .map(normalizeError)
      .filter(e => e)
      .join(';')
  else error = normalizeError(error)
  if (!error || typeof error !== 'string') return null

  return (
    <div
      role="alert"
      css={`
        font-size: 0.85em;
        margin-top: 0.5em;
        // avoids pushing down siblings of "inline-block" parent
        display: table;
      `}
    >
      {!!error && (
        <span
          css={`
            display: block;
            font-style: italic;
            color: #ff571a;
          `}
        >
          {error}
        </span>
      )}
    </div>
  )
}

export {UnderLabel, normalizeError}
export default Label
