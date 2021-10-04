const formatMoney = value => {
  const negative = value < 0
  return `${negative ? `-` : ''}$${Math.abs(value).toFixed(2)}`
}

export default formatMoney
