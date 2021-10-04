import {createBrowserHistory as createHistory} from 'history'
import scrollToAnchor from './scrollToAnchor'

const history = createHistory()
history.listen((location, action) => {
  scrollToAnchor.reset()

  if (action !== 'PUSH') {
    return
  }

  scrollToAnchor(location.hash)
})

export default history
