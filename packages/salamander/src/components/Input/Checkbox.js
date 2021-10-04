import React from 'react'
import shallowCompare from 'misc/shallowCompare'
import Label from './Label'

class Checkbox extends React.Component {
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
          type="checkbox"
          css={`
            position: absolute;
            opacity: 0;
            &:checked + span:after {
              content: '\\e800';
              font-family: Checkbox;
              position: absolute;
              font-size: 14px;
              top: 0;
              left: 6px;
              width: 17px;
              height: 17px;
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
              top: 0;
              left: 6px;
              width: 17px;
              height: 17px;
              content: '';
              background-color: #fff;
              border: 1px solid #ddd;
              ${error && `border: 1px solid #ff571a`};
              border-radius: 3px;
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
const CheckboxWithInteractiveElements = ({children, ...props}) => {
  if (
    !children ||
    typeof children === 'string' ||
    typeof children === 'number'
  ) {
    return <Checkbox {...props}>{children}</Checkbox>
  }
  if (!(children instanceof Array)) children = [children]

  return (
    <div
      css={`
        position: relative;
      `}
    >
      <Checkbox {...props}>
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
      </Checkbox>
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

const CheckboxGroup = ({children, label, notes, disabled, ...props}) => (
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
    {children}
  </div>
)

CheckboxWithInteractiveElements.Raw = Checkbox
CheckboxWithInteractiveElements.Group = CheckboxGroup
export default CheckboxWithInteractiveElements
