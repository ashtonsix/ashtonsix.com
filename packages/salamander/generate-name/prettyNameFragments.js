// adjectives & people nouns come from the latent space around
// "beautiful dancer" in word2vec & then filtered manually:
// https://projector.tensorflow.org/
const adjectives = [
  'Cool',
  'Cute',
  'Famous',
  'Fashionable',
  'Girly',
  'Happy',
  'Lovely',
  'Old',
  'Peculiar',
  'Pretty',
  'Quiet',
  'Rich',
  'Smelly',
  'Strange',
  'Sweet',
  'Tiny',
  'Young'
]

const peopleNouns = [
  'Activist',
  'Actor',
  'Actress',
  'Architect',
  'Artist',
  'Astronaut',
  'Athlete',
  'Author',
  'Ballerina',
  'Bard',
  'Blacksmith',
  'Blogger',
  'Boxer',
  'Cartoonist',
  'Child',
  'Clown',
  'Comedian',
  'Communist',
  'Composer',
  'Conductor',
  'Dancer',
  'Daughter',
  'Designer',
  'Diplomat',
  'Director',
  'Drummer',
  'Empress',
  'Entrepreneur',
  'Explorer',
  'Florist',
  'Friend',
  'German',
  'Grandmother',
  'Historian',
  'Inventor',
  'Journalist',
  'Lawyer',
  'Magician',
  'Merchant',
  'Monk',
  'Musician',
  'Painter',
  'Performer',
  'Philosopher',
  'Photographer',
  'Physicist',
  'Pianist',
  'Player',
  'Playwright',
  'Poet',
  'Princess',
  'Psychologist',
  'Queen',
  'Runner',
  'Scholar',
  'Sculptor',
  'Singer',
  'Songwriter',
  'Soprano',
  'Stargazer',
  'Student',
  'Teacher',
  'Teenager',
  'Tommy',
  'Vegetarian',
  'Wife',
  'Wrestler',
  'Writer',
  'Zoologist'
]

module.exports = {adjectives, peopleNouns}