import React from 'react'
import NumberFormat from 'react-number-format'
import Box from 'atoms/Box'
import Label from './Label'

const transformProps = ({format, field, other}) => {
  const props = Object.assign({}, field, other)
  props['data-lpignore'] = true

  if (!format) return props

  if (format === true) format = {}
  if (typeof format === 'string') format = {format}
  format = {...format}

  const onChange = props.onChange
  delete props.onChange
  format.onValueChange = values => {
    const value = values[format.valueKey || 'value']
    const event = {target: {name: props.name, value}}
    onChange(event)
  }

  Object.assign(props, format)
  return props
}

const Text = ({
  error,
  label,
  notes,
  doubleWidth,
  field,
  form,
  format,
  box,
  left,
  right,
  ...props
}) => {
  props = transformProps({format, field, other: props})

  return (
    <label
      disabled={props.disabled}
      css={`
        display: ${doubleWidth ? `block` : `inline-block`};
        padding: 4px 12px;
        &[disabled] {
          cursor: not-allowed;
        }
        &[disabled] > input {
          cursor: not-allowed;
          background-color: #f2f2f2;
        }
      `}
    >
      <Label disabled={props.disabled} label={label} notes={notes} />
      <Box
        preset="input"
        box={{
          element: 'span',
          error: error,
          width: doubleWidth ? 'double' : 'single',
          paddingOutside: '0px',
          innerElement: format ? NumberFormat : 'input',
          innerProps: props,
          ...box
        }}
        left={left}
        right={right}
      />
    </label>
  )
}

/*
  onFocus the defaultValue disapears, it returns onBlur if !value
*/
class TextWithDefaultValue extends React.PureComponent {
  state = {focused: false}
  constructor() {
    super()

    this.onChange = this.onChange.bind(this)
    this.onFocus = this.onFocus.bind(this)
    this.onBlur = this.onBlur.bind(this)
    this.defaultValueMaybeChanged = this.defaultValueMaybeChanged.bind(this)
  }
  onChange(e) {
    if (!e.target.value) e.target.value = this.props.defaultValue
    // eslint-disable-next-line
    const onChange = this.props?.field?.onChange || this.props?.onChange
    if (onChange) onChange(e)
  }
  onFocus(e) {
    this.setState({focused: true})
    if (this.props.onFocus) this.props.onFocus(e)
  }
  onBlur(e) {
    this.setState({focused: false})
    if (this.props.onBlur) this.props.onBlur(e)
  }
  defaultValueMaybeChanged(prevProps) {
    const props = Object.assign({}, this.props, this.props.field)
    const {name, defaultValue, value, onChange} = props
    const defaultValueChanged = defaultValue !== prevProps.defaultValue

    if (defaultValueChanged || (defaultValue && !value)) {
      if (onChange) onChange({target: {name, value: defaultValue}})
    }
  }
  componentDidMount() {
    this.defaultValueMaybeChanged(this.props)
  }
  componentDidUpdate(prevProps) {
    this.defaultValueMaybeChanged(prevProps)
  }
  render() {
    const focused = this.props.focused || this.state.focused
    const props = Object.assign({}, this.props, this.props.field)
    const {defaultValue, value, ...other} = props

    if (defaultValue == null) {
      return <Text {...other} value={value} />
    }

    if (defaultValue && props.focus) {
      console.warn(
        "Text(): defaultValue & focus don't work together, expect bugs"
      )
    }

    const display = focused && value === defaultValue ? '' : value || ''

    return (
      <Text
        {...other}
        value={display}
        onChange={this.onChange}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
      />
    )
  }
}
TextWithDefaultValue.Raw = Text

export default TextWithDefaultValue
