const fs = require('fs')
const Twitter = require('twitter-lite')

const main = async () => {
  const user = new Twitter({
    consumer_key: 'Kd1KaBSgu7CHGF6c5rPleZB6w',
    consumer_secret: 'gFTKwUtShIWfHWaIHTEsRylIGYl3tt4FdM3u4UTSjaf3qHSueW',
  })

  const response = await user.getBearerToken()

  fs.writeFileSync('.env', 'TWITTER_TOKEN="' + response.access_token + '"')
  console.log(response.access_token)
}

main()
