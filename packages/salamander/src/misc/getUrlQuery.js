import history from './history'

const getUrlQuery = () => {
  return history.location.search
    .slice(1)
    .split('&')
    .map(v => decodeURIComponent(v).split('='))
    .reduce((pv, [k, v]) => ({...pv, [k]: v}), {})
}

export default getUrlQuery
