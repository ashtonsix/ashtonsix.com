const prisma = require('prisma-old')
const tryAgainIf = require('misc/tryAgainIf')
const {listOfNames: specialNames} = require('./listOfNames')
// const {adjectives, peopleNouns} = require('./prettyNameFragments')

// const specialNameChance =
//   specialNames.length /
//   (adjectives.length * peopleNouns.length + specialNames.length)

const generatePrettyName = () => {
  let prettyName
  // if (Math.random() < specialNameChance) {
  prettyName = specialNames[Math.floor(Math.random() * specialNames.length)]
  // } else {
  //   const adjective = adjectives[Math.floor(Math.random() * adjectives.length)]
  //   const noun = peopleNouns[Math.floor(Math.random() * peopleNouns.length)]
  //   prettyName = adjective + ' ' + noun
  // }

  if (typeof prettyName === 'string') {
    prettyName = {prettyName, prettyNameLink: null}
  }

  return prettyName
}

const generateInstanceAddress = () => {
  const b0 = Math.floor(Math.random() * 255)
  const b1 = Math.floor(Math.random() * 255)
  const b2 = Math.floor(Math.random() * 255)
  const b3 = Math.floor(Math.random() * 255)

  return `${b0}.${b1}.${b2}.${b3}`
}

const generateDefaultPrettyName = async (root, args, {user}) => {
  const {prettyName, prettyNameLink} = await tryAgainIf(
    generatePrettyName,
    async n => {
      if (n.prettyName.length > 24) return true
      if (!user.id) return false
      let alreadyUsed
      alreadyUsed = await prisma.query.instances(
        {where: {prettyName: n.prettyName, owner: {id: user.id}}, first: 1},
        ' { id } '
      )
      alreadyUsed = !!alreadyUsed.length
      if (!alreadyUsed) return false
      return true
    }
  )
  const instanceAddress = generateInstanceAddress()

  return {prettyName, prettyNameLink, instanceAddress}
}

module.exports = generateDefaultPrettyName
