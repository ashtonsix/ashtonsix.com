// prettier-ignore
const kebab = (...strings) => {
  let char = '-'
  if (strings.slice(-1)[0]?.char) char = strings.pop().char

  return strings
    .filter(s => s)
    .map(str => str.trim().replace(/\s+/g, char).toLowerCase())
    .filter(s => s)
    .join(char)
}

export default kebab
