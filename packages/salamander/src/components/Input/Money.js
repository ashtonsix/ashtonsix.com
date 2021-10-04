import React from 'react'
import Input from 'components/Input'

const AmountButton = ({amount, onChange}) => (
  <Input.Button
    type="button"
    onClick={async () => {
      onChange(amount.toString(10))
    }}
    box={{
      paddingOutside: 'single',
      extraCss: ' margin-left: 6px; & > button { width: 70px; } '
    }}
  >
    ${amount}
  </Input.Button>
)

const chunk = (arr, chunkSize = 3) => {
  const chunks = arr.reduce(
    (pv, v) => {
      let latest = pv.slice(-1)[0]
      if (latest.length >= chunkSize) {
        latest = []
        pv.push(latest)
      }
      latest.push(v)
      return pv
    },
    [[]]
  )
  if (!chunks.slice(-1)[0].length) chunks.pop()
  return chunks
}

const MoneyInput = ({
  defaultAmounts = [10, 20, 50, 100, 200, 500],
  onChange,
  ...props
}) => {
  return (
    <>
      <Input.Text
        format={{
          prefix: '$',
          decimalScale: 2,
          allowNegative: false,
          allowEmptyFormatting: true,
          thousandSeparator: ','
        }}
        onChange={e => onChange(e.target.value)}
        {...props}
      />
      {chunk(defaultAmounts, 3).map((defaultAmounts, i) => (
        <span key={i}>
          <br />
          {defaultAmounts.map(amount => (
            <AmountButton key={amount} amount={amount} onChange={onChange} />
          ))}
        </span>
      ))}
      <br />
    </>
  )
}

export default MoneyInput
