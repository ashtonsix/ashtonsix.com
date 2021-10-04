import React from 'react'
import {css} from 'emotion'
import Box from 'atoms/Box'
import Text from 'components/Text'
import Info from 'components/Info'
import Logo from './Logo'
import InstanceTypeSelector from 'pages/Dashboard/CreateInstance/InstanceTypeSelector'
import stubs from '../../stubs'

const spotPricing = stubs.spotPricing

const GetStarted = ({label}) => {
  const hitArea = {top: '40px', bottom: '40px', left: '0px', right: '0px'}
  return (
    <>
      <hr
        css={`
          text-align: center;
          max-width: 740px;
          margin-top: 24px;
          margin-bottom: 0;
        `}
      />
      <div
        css={`
          text-align: center;
        `}
      >
        <Box
          preset="button"
          to="/signup"
          box={{
            element: Text.Link.Raw,
            always: ['text'],
            paddingOutside: hitArea,
            hitArea: hitArea,
            extraCss: css`
              width: 100%;
              max-width: 740px;
              & > a > span[data-box] {
                width: 350px;
                max-width: 100%;
                font-size: 1.75rem;
              }
            `
          }}
        >
          {label}
        </Box>
      </div>
      <hr
        css={`
          text-align: center;
          max-width: 740px;
          margin-top: 0;
          margin-bottom: 36px;
        `}
      />
    </>
  )
}

const Section = ({id, heading, bigText, children}) => (
  <>
    {!!heading && (
      <h1
        id={id}
        css={`
          text-align: center;
        `}
      >
        {heading}
      </h1>
    )}
    <section
      css={`
        display: flex;
        justify-content: center;
        ${bigText && `font-size: 1.25rem`};
      `}
    >
      <div
        css={`
          max-width: 720px;
        `}
      >
        {children}
      </div>
    </section>
  </>
)

const Seperator = ({bigTopMargin}) => (
  <hr
    css={`
      text-align: center;
      max-width: 740px;
      margin-top: ${bigTopMargin ? `36px` : `24px`};
      margin-bottom: 36px;
    `}
  />
)

const Landing = () => {
  return (
    <>
      <section
        css={`
          text-align: center;
        `}
      >
        <h1
          css={`
            margin-bottom: 0;
          `}
        >
          <Logo />
        </h1>
        <h2>
          ML-ready servers. $
          {(() => {
            // eslint-disable-next-line
            const pricing = (spotPricing || []).find(
              p => p.instanceType === 'p2.xlarge'
            )
            if (!pricing) return '0.4x'

            return pricing.amount.toFixed(2)
          })()}{' '}
          per hour for a Nvidia GPU
        </h2>
        <h3
          css={`
            font-size: 21px;
          `}
        >
          Helping make deep learning cheaper and easier
        </h3>
      </section>
      <Seperator />
      <Section id="intro" bigText>
        <p>
          Salamander automatically installs software like Pytorch, Tensorflow
          and Anaconda; it provides complete servers, and can still launch
          Jupyter Notebook with one click; Salamander includes monthly budgets,
          complete usage audits, and can add/remove GPUs after you've launched a
          server.
        </p>
      </Section>
      {/*
      <GetStarted label="Get Started" />
      */}
      <h1
        id="pricing"
        css={`
          text-align: center;
        `}
      >
        Pricing
        <Info exclamation fontSize={1.5}>
          Billed per-second of usage
        </Info>
      </h1>
      <section
        css={`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <h2>Storage</h2>
        <table
          css={`
            margin-bottom: 12px;
          `}
        >
          <tbody
            css={`
              & tr {
                vertical-align: top;
              }
              & tr td:first-child {
                text-align: right;
              }
              & tr td:nth-child(2) {
                text-align: left;
                font-style: italic;
              }
            `}
          >
            <tr>
              <td>NVMe Storage:</td>
              <td>$0.10 per GB per month</td>
            </tr>
          </tbody>
        </table>
      </section>
      <h2
        css={`
          text-align: center;
        `}
      >
        Servers
      </h2>
      <section
        css={`
          display: flex;
          justify-content: center;
          @media (max-width: 870px) {
            flex-direction: column;
            align-items: center;
          }
        `}
      >
        <InstanceTypeSelector />
      </section>
      <Seperator bigTopMargin />
      <Section id="you_should_know" heading="You Should Know">
        <p>
          Compute credits are purchased upfront. Upon running out of credits,
          Salamander automatically buys more. To determine how many credits to
          buy, Salamander tabulates your usage over the last week and rounds up
          to the nearest $20
        </p>
        <p>
          Even when your instance is stopped, you are charged for storage
          (destroy the instance to avoid storage charges; but note this deletes
          all your data). When it is running, you are also charged for compute.
          You are responsible for shutting it down when you are done.
        </p>
        <p>
          The displayed prices are estimates. They can fluctuate by up to 20%
          during a single session. On the upside, prices can also fluctuate down
          by 20%
        </p>
        <p>
          Servers may stop prematurely, resulting in lost work. Some users have
          run multiweek experiments without interruption, but you should still
          save your work often
        </p>
      </Section>
      <GetStarted label="Choose Salamander Today!" />
    </>
  )
}

export default Landing
