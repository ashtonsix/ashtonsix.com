const specialNames = require('./specialNames')
const scientistsBefore1900 = require('./scientistsBefore1900')
const scientistsBefore2000 = require('./scientistsBefore2000')
const scientistsAfter2000 = require('./scientistsAfter2000')

const listOfNames = [].concat(
  specialNames,
  scientistsBefore1900,
  scientistsBefore2000,
  scientistsAfter2000
)

const linkMap = {}
listOfNames.forEach(p => {
  if (p.prettyName) linkMap[p.prettyName] = p.prettyNameLink
})

const findPrettyNameLink = prettyName => linkMap[prettyName] || null

module.exports = {listOfNames, findPrettyNameLink}
