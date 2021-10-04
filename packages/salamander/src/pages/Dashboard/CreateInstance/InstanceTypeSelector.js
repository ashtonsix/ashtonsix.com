import React from 'react'
import {css} from 'emotion'

import shallowCompare from 'misc/shallowCompare'
import Box from 'atoms/Box'
import Info from 'components/Info'
import Text from 'components/Text'
import Input from 'components/Input'
import stubs from '../../../stubs'

class InstanceType extends React.Component {}

const InstanceTypeTagGroup = ({
  options,
  viewing,
  selected,
  onSelect,
  onPreviewStart,
  onPreviewStop
}) => {
  return (
    <div
      css={`
        text-align: center;
        padding-top: 6px;
      `}
    >
      {options.map(o => (
        <Box
          key={o.value}
          preset="button"
          box={{
            paddingInside: {
              top: '2px',
              bottom: '2px',
              left: '6px',
              right: '6px'
            },
            paddingOutside: {
              top: '4px',
              bottom: '4px',
              left: '6px',
              right: '6px'
            },
            extraCss: css`
              & > * > span[data-box] {
                text-align: right;
                width: 42px;
              }
            `,
            always: [
              'light',
              o.value === viewing && 'dashed',
              o.value === selected && 'solid'
            ]
          }}
          type="button"
          onClick={e => {
            e.stopPropagation() // stops event being processed twice
            onSelect(o.value)
          }}
          onMouseEnter={() => onPreviewStart(o.value)}
          onMouseLeave={() => onPreviewStop(o.value)}
          onFocus={() => onPreviewStart(o.value, true)}
          onBlur={() => onPreviewStop(o.value, true)}
        >
          {o.label}
        </Box>
      ))}
    </div>
  )
}

class InstanceTypeGroup extends React.Component {
  state = {hovered: null, focused: null, lastViewed: null}
  shouldComponentUpdate(nextProps, nextState) {
    // ignore children
    const {children: _0, ...current} = this.props
    const {children: _1, ...next} = nextProps

    return (
      shallowCompare(this.state, nextState) ||
      shallowCompare(current, next) ||
      shallowCompare(current.pricing, next.pricing)
    )
  }
  render() {
    let {hovered, lastViewed, focused} = this.state
    let {type, title, value, pricing, sizes = true, children} = this.props
    if (!(children instanceof Array)) children = [children]

    const options = children.map(c => c.props)
    if (!options.some(o => o.value === value)) value = null
    const defaultViewing = options.find(o => o.default).value

    // makes preview UX feel intutive with a combination of selected values,
    // keyboard focus & mouse movement
    let viewing = hovered || focused || value || lastViewed || defaultViewing
    viewing = options.find(o => o.value === viewing)
    pricing = pricing[viewing.value]

    return (
      <Box
        box={{
          width: 'single',
          always: value && sizes && ['solid'],
          paddingInside: {base: '6px', sides: '12px'},
          extraCss: `vertical-align: top;`,
          innerProps: {'data-type': type}
        }}
        onClick={() => {
          if (this.props.onChange) this.props.onChange(viewing.value)
        }}
      >
        <strong>{title}</strong>
        <br />
        {!!pricing && (
          <div
            css={`
              font-style: italic;
            `}
          >
            ${pricing.toFixed(2)} per hour
          </div>
        )}
        {viewing.children}
        {!!sizes && (
          <InstanceTypeTagGroup
            options={options}
            viewing={viewing.value}
            selected={value}
            onSelect={value => {
              if (this.props.onChange) this.props.onChange(value)
            }}
            onPreviewStart={(value, focus) => {
              const patch = {hovered: value}
              if (focus) {
                patch.focused = value
                patch.lastViewed = value
              }
              this.setState(patch)
            }}
            onPreviewStop={(value, focus) => {
              const patch = {hovered: null}
              if (focus && value === focused) {
                patch.focused = null
                patch.lastViewed = focused
              }
              this.setState(patch)
            }}
          />
        )}
      </Box>
    )
  }
}

const GpuLabel = ({children, ram, flops, datasheet}) => (
  <div
    css={`
      display: inline-block;
      text-decoration: underline;
      & > a {
        position: relative;
        z-index: 2;
      }
    `}
    onClick={e => e.stopPropagation()}
  >
    <Text.Link to={datasheet} external>
      {children}
    </Text.Link>
    <Info placement="bottom-start" key={children}>
      {ram} integrated RAM; {flops}
    </Info>
  </div>
)

const ThrottleLabel = ({throttle}) => (
  <div
    css={`
      display: inline-block;
    `}
  >
    {throttle}% throttle
    <Info placement="top-start">
      For example, restricting yourself to 12% of the CPU normally means you can
      use the server's full capacity {throttle - 12}% of the time
    </Info>
  </div>
)

const spotPricing = stubs.spotPricing

const InstanceTypeGroups = {
  M5: props => (
    <InstanceTypeGroup type="m5" title="General Purpose" {...props}>
      <InstanceType label="2x" value="m5.large">
        <div>2x vCPU</div>
        <div>8GB RAM</div>
      </InstanceType>
      <InstanceType label="4x" value="m5.xlarge">
        <div>4x vCPU</div>
        <div>16GB RAM</div>
      </InstanceType>
      <InstanceType label="8x" value="m5.2xlarge" default>
        <div>8x vCPU</div>
        <div>32GB RAM</div>
      </InstanceType>
      <InstanceType label="16x" value="m5.4xlarge">
        <div>16x vCPU</div>
        <div>64GB RAM</div>
      </InstanceType>
      <InstanceType label="48x" value="m5.12xlarge">
        <div>48x vCPU</div>
        <div>192GB RAM</div>
      </InstanceType>
      <InstanceType label="96x" value="m5.24xlarge">
        <div>96x vCPU</div>
        <div>384GB RAM</div>
      </InstanceType>
    </InstanceTypeGroup>
  ),
  P2: props => (
    <InstanceTypeGroup type="p2" title="Accelerated Computing" {...props}>
      <InstanceType label="1x" value="p2.xlarge" default>
        <GpuLabel
          ram="12GB"
          flops="5.6 TFLOPS"
          datasheet="https://www.nvidia.com/content/dam/en-zz/Solutions/Data-Center/tesla-product-literature/TeslaK80-datasheet.pdf"
        >
          K80 GPU
        </GpuLabel>
        <div>4x vCPU</div>
        <div>61GB RAM</div>
      </InstanceType>
      <InstanceType label="8x" value="p2.8xlarge">
        <GpuLabel
          ram="96GB"
          flops="45 TFLOPS"
          datasheet="https://www.nvidia.com/content/dam/en-zz/Solutions/Data-Center/tesla-product-literature/TeslaK80-datasheet.pdf"
        >
          8x K80 GPU
        </GpuLabel>
        <div>32x vCPU</div>
        <div>488GB RAM</div>
      </InstanceType>
      <InstanceType label="16x" value="p2.16xlarge">
        <GpuLabel
          ram="192GB"
          flops="90 TFLOPS"
          datasheet="https://www.nvidia.com/content/dam/en-zz/Solutions/Data-Center/tesla-product-literature/TeslaK80-datasheet.pdf"
        >
          16x K80 GPU
        </GpuLabel>
        <div>64x vCPU</div>
        <div>732GB RAM</div>
      </InstanceType>
    </InstanceTypeGroup>
  ),
  P3: props => (
    <InstanceTypeGroup type="p3" title="Accelerated Computing v2" {...props}>
      <InstanceType label="1x" value="p3.2xlarge" default>
        <GpuLabel
          ram="16GB"
          flops="15.7 TFLOPS"
          datasheet="https://images.nvidia.com/content/technologies/volta/pdf/tesla-volta-v100-datasheet-letter-fnl-web.pdf"
        >
          V100 GPU
        </GpuLabel>
        <div>8x vCPU</div>
        <div>61GB RAM</div>
      </InstanceType>
      <InstanceType label="4x" value="p3.8xlarge">
        <GpuLabel
          ram="64GB"
          flops="63 TFLOPS"
          datasheet="https://images.nvidia.com/content/technologies/volta/pdf/tesla-volta-v100-datasheet-letter-fnl-web.pdf"
        >
          4x V100 GPU
        </GpuLabel>
        <div>32x vCPU</div>
        <div>244GB RAM</div>
      </InstanceType>
      <InstanceType label="8x" value="p3.16xlarge">
        <GpuLabel
          ram="128GB"
          flops="126 TFLOPS"
          datasheet="https://images.nvidia.com/content/technologies/volta/pdf/tesla-volta-v100-datasheet-letter-fnl-web.pdf"
        >
          8x V100 GPU
        </GpuLabel>
        <div>64x vCPU</div>
        <div>488GB RAM</div>
      </InstanceType>
    </InstanceTypeGroup>
  ),
  G3: props => (
    <InstanceTypeGroup type="g3" title="Workstation Graphics" {...props}>
      <InstanceType label="1x" value="g3.4xlarge" default>
        <GpuLabel
          ram="8GB"
          flops="7.4 TFLOPS"
          datasheet="https://images.nvidia.com/content/tesla/pdf/188417-Tesla-M60-DS-A4-fnl-Web.pdf"
        >
          M60 GPU
        </GpuLabel>
        <div>16x vCPU</div>
        <div>122GB RAM</div>
      </InstanceType>
      <InstanceType label="2x" value="g3.8xlarge">
        <GpuLabel
          ram="96GB"
          flops="15 TFLOPS"
          datasheet="https://images.nvidia.com/content/tesla/pdf/188417-Tesla-M60-DS-A4-fnl-Web.pdf"
        >
          2x M60 GPU
        </GpuLabel>
        <div>32x vCPU</div>
        <div>244GB RAM</div>
      </InstanceType>
      <InstanceType label="4x" value="g3.16xlarge">
        <GpuLabel
          ram="192GB"
          flops="30 TFLOPS"
          datasheet="https://images.nvidia.com/content/tesla/pdf/188417-Tesla-M60-DS-A4-fnl-Web.pdf"
        >
          4x M60 GPU
        </GpuLabel>
        <div>64x vCPU</div>
        <div>488GB RAM</div>
      </InstanceType>
      <InstanceType label="g3s" value="g3s.xlarge">
        <GpuLabel
          ram="8GB"
          flops="7.4 TFLOPS"
          datasheet="https://images.nvidia.com/content/tesla/pdf/188417-Tesla-M60-DS-A4-fnl-Web.pdf"
        >
          M60 GPU
        </GpuLabel>
        <div>4x vCPU</div>
        <div>30.5GB RAM</div>
      </InstanceType>
    </InstanceTypeGroup>
  ),
  R5: props => (
    <InstanceTypeGroup type="r5" title="Memory-Optimised" {...props}>
      <InstanceType label="2x" value="r5.large">
        <div>2x vCPU</div>
        <div>16GB RAM</div>
      </InstanceType>
      <InstanceType label="4x" value="r5.xlarge">
        <div>4x vCPU</div>
        <div>32GB RAM</div>
      </InstanceType>
      <InstanceType label="8x" value="r5.2xlarge" default>
        <div>8x vCPU</div>
        <div>64GB RAM</div>
      </InstanceType>
      <InstanceType label="16x" value="r5.4xlarge">
        <div>16x vCPU</div>
        <div>128GB RAM</div>
      </InstanceType>
      <InstanceType label="48x" value="r5.12xlarge">
        <div>48x vCPU</div>
        <div>384GB RAM</div>
      </InstanceType>
      <InstanceType label="96x" value="r5.24xlarge">
        <div>96x vCPU</div>
        <div>768GB RAM</div>
      </InstanceType>
    </InstanceTypeGroup>
  ),
  C5: props => (
    <InstanceTypeGroup type="c5" title="Compute-Optimised" {...props}>
      <InstanceType label="2x" value="c5.large">
        <div>2x vCPU</div>
        <div>4GB RAM</div>
      </InstanceType>
      <InstanceType label="4x" value="c5.xlarge">
        <div>4x vCPU</div>
        <div>8GB RAM</div>
      </InstanceType>
      <InstanceType label="8x" value="c5.2xlarge" default>
        <div>8x vCPU</div>
        <div>16GB RAM</div>
      </InstanceType>
      <InstanceType label="16x" value="c5.4xlarge">
        <div>16x vCPU</div>
        <div>32GB RAM</div>
      </InstanceType>
      <InstanceType label="36x" value="c5.9xlarge">
        <div>36x vCPU</div>
        <div>72GB RAM</div>
      </InstanceType>
      <InstanceType label="72x" value="c5.18xlarge">
        <div>72x vCPU</div>
        <div>144GB RAM</div>
      </InstanceType>
    </InstanceTypeGroup>
  ),
  T3: props => (
    <InstanceTypeGroup type="t3" title="Burstable" {...props}>
      <InstanceType label="2x" value="t3.large">
        <ThrottleLabel throttle={30} />
        <div>2x vCPU</div>
        <div>8GB RAM</div>
      </InstanceType>
      <InstanceType label="4x" value="t3.xlarge">
        <ThrottleLabel throttle={40} />
        <div>4x vCPU</div>
        <div>16GB RAM</div>
      </InstanceType>
      <InstanceType label="8x" value="t3.2xlarge" default>
        <ThrottleLabel throttle={40} />
        <div>8x vCPU</div>
        <div>32GB RAM</div>
      </InstanceType>
    </InstanceTypeGroup>
  )
}

const onChangeCache = new Map()
const InstanceTypeSelector = ({
  label,
  notes,
  field,
  form,
  types = ['m5', 'p2', 'p3'],
  ...props
}) => {
  types = new Set(types)
  let onChange = props.onChange
  // memoizes onChange handler to improve performance
  if (form) {
    const t = onChangeCache.get(form.setFieldValue) || {}
    if (t[field.name]) onChange = t[field.name]
    else {
      onChange = value => form.setFieldValue(field.name, value)
      t[field.name] = onChange
      onChangeCache.set(form.setFieldValue, t)
    }
  }

  const pricing = {}

  // eslint-disable-next-line
  ;(spotPricing || []).forEach(
    ({instanceType, amount}) => (pricing[instanceType] = amount)
  )

  const groupProps = {pricing, ...field, ...props, onChange}

  return (
    <>
      <Input.Label label={label} notes={notes} padLeft />
      {types.has('m5') && <InstanceTypeGroups.M5 {...groupProps} />}
      {types.has('r5') && <InstanceTypeGroups.R5 {...groupProps} />}
      {types.has('c5') && <InstanceTypeGroups.C5 {...groupProps} />}
      {types.has('t3') && <InstanceTypeGroups.T3 {...groupProps} />}
      {types.has('g3') && <InstanceTypeGroups.G3 {...groupProps} />}
      {types.has('p2') && <InstanceTypeGroups.P2 {...groupProps} />}
      {types.has('p3') && <InstanceTypeGroups.P3 {...groupProps} />}
    </>
  )
}

export default InstanceTypeSelector
