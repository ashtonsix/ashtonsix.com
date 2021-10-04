import React from 'react'
import shallowCompare from 'misc/shallowCompare'
import Label, {UnderLabel} from './Label'

class Radio extends React.Component {
  shouldComponentUpdate(nextProps) {
    return (
      shallowCompare(this.props, nextProps) ||
      shallowCompare(this.props.field, nextProps.field)
    )
  }
  render() {
    const {children, error, field, form, ...props} = this.props
    return (
      <label
        css={`
          display: inline-block;
          outline: 0;
          padding: 4px 12px;
          min-height: 25px;
          line-height: 17px;
          min-width: 17px;
          &:hover > span,
          & input:focus + span {
            color: #1890ff;
          }
          &:hover > span:before,
          & input:focus + span:before {
            border: 1px dashed #1890ff;
          }
          &:active > span:before {
            border: 1px solid #1890ff;
          }
          & input[disabled] + span:before {
            border: 1px solid #ddd;
            background-color: #f2f2f2;
          }
          & input[disabled] + span {
            color: rgba(0, 0, 0, 0.5);
          }
          ${error && `color: #ff571a`};
          ${props.disabled && `cursor: not-allowed`};
        `}
      >
        <input
          checked={(field || {}).value != null ? field.value : props.value}
          {...field}
          {...props}
          type="radio"
          css={`
            position: absolute;
            opacity: 0;
            &:checked + span:after {
              content: '';
              font-family: Checkbox;
              position: absolute;
              font-size: 14px;
              top: 1px;
              left: 6px;
              width: 15px;
              height: 15px;
              -webkit-transform: scale(0.46666667);
              transform: scale(0.46666667);
              background-color: rgba(0, 0, 0, 0.85);
              border-radius: 500rem;
              text-align: center;
              color: rgba(0, 0, 0, 0.85);
              ${props.disabled && `color: rgba(0, 0, 0, 0.65)`};
            }
          `}
        />
        <span
          css={`
            font-family: 'Nunito', sans-serif;
            user-select: none;
            position: relative;
            display: block;
            min-width: 220px;
            padding-left: 36px;
            outline: 0;
            &:before {
              position: absolute;
              top: 1px;
              left: 6px;
              width: 15px;
              height: 15px;
              content: '';
              background-color: #fff;
              border: 1px solid #ccc;
              ${error && `border: 1px solid #ff571a`};
              border-radius: 500rem;
            }
          `}
        >
          {children}
        </span>
      </label>
    )
  }
}

// Lets user touch elements within copy without activating checkbox
const RadioWithInteractiveElements = ({children, ...props}) => {
  if (
    !children ||
    typeof children === 'string' ||
    typeof children === 'number'
  ) {
    return <Radio {...props}>{children}</Radio>
  }
  if (!(children instanceof Array)) children = [children]

  return (
    <div
      css={`
        position: relative;
      `}
    >
      <Radio {...props}>
        {children.map((c, i) => {
          if (typeof c === 'string' || typeof c === 'number') return c
          return (
            <span
              css={`
                visibility: hidden;
                pointer-events: none;
              `}
              key={i}
            >
              {c}
            </span>
          )
        })}
      </Radio>
      <span
        css={`
          position: absolute;
          top: 4px;
          left: 48px;
          padding-right: 12px;
          line-height: 17px;
          font-family: 'Nunito', sans-serif;
          pointer-events: none;
          visibility: hidden;
        `}
      >
        {children.map((c, i) => {
          if (typeof c === 'string' || typeof c === 'number') return c
          return (
            <span
              css={`
                visibility: visible;
                pointer-events: auto;
              `}
              key={i}
            >
              {c}
            </span>
          )
        })}
      </span>
    </div>
  )
}

class RadioGroup extends React.Component {
  constructor() {
    super()
    this.name = Math.random().toString(36) + Date.now().toString(36)
  }
  render() {
    const name = this.name
    let {children, label, notes, disabled, error} = this.props
    if (!(children instanceof Array)) children = [children]
    children = children.filter(
      c => c && ['string', 'number', 'object'].includes(typeof c)
    )

    return (
      <div
        css={`
          display: inline-block;
          padding-top: ${label || notes ? `4px` : `8px`};
        `}
      >
        {!!(label || notes) && (
          <div
            css={`
              padding-left: 12px;
            `}
          >
            <Label disabled={disabled} label={label} notes={notes} />
          </div>
        )}
        {children.map((c, i) => React.cloneElement(c, {name, key: i}))}
        <UnderLabel error={error} />
      </div>
    )
  }
}

RadioWithInteractiveElements.Raw = Radio
RadioWithInteractiveElements.Group = RadioGroup
export default RadioWithInteractiveElements
