import React from 'react'
import stubs from '../stubs'
import Text from 'components/Text'
import Input from 'components/Input'

const path =
  'm 51.4023,48.356772 c -1.88661,-0.695067 -3.47533,-2.0852 -4.1704,-3.872514 L 29.35876,2.3830853 C 28.6637,0.89365703 27.77004,3.4809752e-8 26.28061,3.4809752e-8 24.79118,3.4809752e-8 23.99682,0.89365703 23.30176,2.3830853 c 0,0 -7.24855,17.2773687 -9.83023,23.6322627 -0.49648,1.092247 -1.39013,2.085199 -2.48238,2.48238 -1.88661,0.695067 -3.27674,2.28379 -3.67392,4.36899 -0.49648,2.780266 1.39013,5.560532 4.0711,6.255599 3.07815,0.794361 6.1563,-0.992953 6.85137,-4.071104 0.29789,-1.290838 0.19859,-2.680971 -0.39718,-3.773219 -0.49648,-1.092247 -0.49648,-2.383085 0,-3.475332 l 5.95771,-14.695693 0,21.944244 c 0,1.489428 -0.59577,2.879561 -1.78731,3.773218 -1.48943,1.290838 -2.38309,3.078152 -2.38309,5.262647 0.0993,3.574627 3.07815,6.553484 6.55349,6.553484 3.77322,0.0993 6.75207,-2.978857 6.75207,-6.65278 0,-2.085199 -0.99295,-3.971808 -2.48238,-5.163351 -1.09225,-0.893657 -1.68802,-2.28379 -1.68802,-3.773218 l 0,-21.844949 13.30556,31.973061 c 0.89366,2.0852 0.79436,4.56758 -0.39718,6.553484 -0.99295,1.688019 -1.48943,3.673924 -0.99295,5.759123 0.59577,3.177447 3.17745,5.759123 6.35489,6.354894 5.16336,0.992952 9.73094,-2.978856 9.73094,-7.943617 -0.1986,-3.475333 -2.28379,-6.354894 -5.36195,-7.546437 z'

const orange = '#f37a49'

const Logo = () => (
  <svg viewBox="0 0 64 64" width={50} height={50}>
    <title>Salamander</title>
    <path d={path} fill={orange} />
  </svg>
)

const user = stubs.user

const Header = ({loggedIn}) => (
  <div
    css={`
      display: flex;
      justify-content: space-between;
    `}
  >
    <div>
      <span
        css={`
          padding: 10px;
          display: inline-block;
        `}
      >
        <Logo />
      </span>
    </div>
    <div>
      {(() => {
        if (loggedIn) {
          return (
            <>
              {user.email}
              <span
                css={`
                  padding-left: 6px;
                `}
              />
              <Text.Link to="/logout" outerElement="a">
                Log Out
              </Text.Link>
            </>
          )
        }
        return (
          <>
            <Text.Link to="/login">Log In</Text.Link>
            <Text.Link.Raw
              to="/signup"
              tabIndex="-1"
              css={`
                & * {
                  cursor: pointer !important;
                }
              `}
            >
              <Input.Button>
                <span
                  css={`
                    color: #1890ff;
                  `}
                >
                  Get Started
                </span>
              </Input.Button>
            </Text.Link.Raw>
          </>
        )
      })()}
    </div>
  </div>
)

export default Header
