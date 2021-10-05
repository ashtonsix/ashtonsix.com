import React from 'react'
import Header from 'components/Header'
import Text from 'components/Text'
import axolotl from 'components/axolotl.jpg'

const DayBrighten = () => {
  return (
    <>
      <img
        src={axolotl}
        alt=""
        css={`
          display: block;
          height: 200px;
          width: 360px;
          margin-top: 20px;
          margin-bottom: 20px;
          @media (max-width: 650px) {
            margin-left: -35px;
          }
        `}
      />
      <p>
        Axolotls are a type of salamander, they live underwater and have frills
      </p>
      <p>
        <Text.Link external to="https://twitter.com/emilywithcurls">
          Emily Griffin
        </Text.Link>{' '}
        drew our axolotl, her website is{' '}
        <Text.Link external to="https://daybrighten.com">
          daybrighten.com
        </Text.Link>
        , and we hope this drawing makes you feel happy inside
      </p>
    </>
  )
}

const Container = ({children, loggedIn}) => (
  <div
    css={`
      padding: 20px;
      overflow-x: hidden;
      @media (max-width: 650px) {
        padding: 0;
      }
    `}
  >
    <div
      css={`
        display: flex;
        flex-direction: column;
        max-width: 960px;
        min-height: calc(100vh - 40px);
        margin: 0 auto;
        padding: 30px 50px;
        background-color: #ffffff;
        border: 1px solid #eee;
        @media (max-width: 650px) {
          padding: 25px 35px;
          padding-bottom: 25px;
          border: 0;
        }
        position: relative;
      `}
    >
      <Header loggedIn={loggedIn} />
      <div
        css={`
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          justify-content: space-between;
        `}
      >
        <div>{children}</div>
        {(() => {
          const dayBrighten = loggedIn
          return (
            <div>
              {dayBrighten && <DayBrighten />}
              <p
                css={`
                  ${!dayBrighten && `padding-top: 40px`};
                `}
              >
                By using Salamander you agree to our{' '}
                <Text.Link nonfunctional external to="/legal/service">
                  Terms of Service
                </Text.Link>{' '}
                &{' '}
                <Text.Link nonfunctional external to="/legal/privacy">
                  Privacy Policy
                </Text.Link>
                . Salamander is a{' '}
                <Text.Link external to="https://www.fast.ai">
                  fast.ai
                </Text.Link>{' '}
                project
              </p>
            </div>
          )
        })()}
      </div>
    </div>
  </div>
)

export default Container
