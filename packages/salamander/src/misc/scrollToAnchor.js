// adapted from https://gist.github.com/gajus/0bbc78135d88a02c18366f12237011a5
// can scroll to elements, even if they haven't been created yet

const createScrollToAnchor = (timeout = 1000) => {
  let observer
  let timeoutId

  const reset = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)

      timeoutId = null
    }

    if (observer) {
      observer.disconnect()
    }
  }

  const createScrollToElement = id => {
    return () => {
      const element = document.getElementById(id)

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })

        reset()

        return true
      }

      return false
    }
  }

  const scrollToAnchor = anchor => {
    if (timeoutId) reset()

    if (typeof anchor !== 'string') return

    const elementId = anchor.replace(/^#/, '')
    if (!elementId) return

    const scrollToElement = createScrollToElement(elementId)

    setTimeout(() => {
      if (scrollToElement()) return

      if (!window.MutationObserver) return
      observer = new MutationObserver(scrollToElement)

      observer.observe(document, {
        attributes: true,
        childList: true,
        subtree: true
      })

      timeoutId = setTimeout(reset, timeout)
    })
  }
  scrollToAnchor.reset = () => {
    if (timeoutId) reset()
  }

  return scrollToAnchor
}

const scrollToAnchor = createScrollToAnchor()

export default scrollToAnchor
