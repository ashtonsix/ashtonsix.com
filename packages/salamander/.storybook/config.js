const {configure, addDecorator} = require('@storybook/react')
const {withInfo} = require('@storybook/addon-info')
const React = require('react')
const {MemoryRouter} = require('react-router')

function loadStories() {
  const requireContext = require.context('../src', true, /\.story\.js$/)
  requireContext.keys().forEach(requireContext)
}

const info = {
  inline: true,
  propTables: null
}
addDecorator(withInfo(info))
addDecorator(story => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
))
configure(loadStories, module)
