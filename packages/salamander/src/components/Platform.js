import platform from 'platform'

/*
Common values include:
  windows
  windows_server_2008_r2_/_7
  windows_server_2008_/_vista
  windows_xp
  os_x
  linux
  ubuntu
  debian
  fedora
  red_hat
  suse
  android
  ios
  windows_phone
*/
const os = platform.os.family.toLowerCase().replace(' ', '_')

const Platform = ({children, negative, ...platforms}) => {
  let yes = Object.keys(platforms).some(p => os.includes(p.toLowerCase()))
  if (negative) yes = !yes
  return yes ? children : null
}

export default Platform
