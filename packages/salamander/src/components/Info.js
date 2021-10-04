import React from 'react'
import {css} from 'emotion'
import {Manager, Reference, Popper} from 'react-popper'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faQuestionCircle,
  faExclamationCircle
} from '@fortawesome/free-solid-svg-icons'

const negativeMargin = padding => {
  padding = {left: true, right: true, ...padding}

  return css`
    margin-left: ${padding.left ? '-2px' : '-8px'};
    margin-right: ${padding.right ? '-2px' : '-8px'};
  `
}

class Info extends React.PureComponent {
  componentDidMount() {
    // shifts tooltip a couple pixels into correct position
    setTimeout(() => this.scheduleUpdate())
    setTimeout(() => this.scheduleUpdate(), 500)
  }
  render() {
    const {
      children,
      exclamation,
      placement = 'top',
      padding,
      fontSize = 1
    } = this.props

    const bottom = placement.startsWith('bottom')
    const top = placement.startsWith('top')
    const left = placement.startsWith('left')
    const right = placement.startsWith('right')

    return (
      <Manager>
        <span
          tabIndex="0"
          css={`
            font-size: ${fontSize}rem;
            &:focus {
              outline: 0;
            }
            &:hover span[data-info='reference'],
            &:focus span[data-info='reference'],
            &:focus-within span[data-info='reference'] {
              color: #1890ff;
            }
            & span[data-info='popper'] {
              visibility: hidden;
              pointer-events: none;
            }
            &:hover span[data-info='popper'],
            &:focus span[data-info='popper'],
            &:focus-within span[data-info='popper'] {
              visibility: initial;
              pointer-events: auto;
            }
          `}
        >
          <Reference>
            {({ref}) => (
              <span
                ref={ref}
                css={`
                  padding: 4px 8px;
                  ${negativeMargin(padding)};
                  color: rgba(0, 0, 0, 0.85);
                `}
                data-info="reference"
              >
                <FontAwesomeIcon
                  icon={exclamation ? faExclamationCircle : faQuestionCircle}
                />
              </span>
            )}
          </Reference>
          <Popper placement={placement}>
            {({ref, style, placement, arrowProps, scheduleUpdate}) => {
              this.scheduleUpdate = scheduleUpdate
              return (
                <span
                  ref={ref}
                  style={style}
                  css={`
                    display: block;
                    max-width: 320px;
                    font-size: ${fontSize}rem;
                    z-index: 1;
                    text-align: left;
                    min-width: 170px;
                    position: relative;
                    margin: 3px;
                    padding: 4px 12px;
                    border-radius: 4px;
                    border: 1px solid #ddd;
                    background-color: #f7f7f7;
                    color: rgba(0, 0, 0, 0.7);
                    cursor: default;
                    &:hover {
                      visibility: initial;
                      pointer-events: auto;
                    }
                  `}
                  data-placement={placement}
                  data-info="popper"
                >
                  {children}
                  <span
                    ref={arrowProps.ref}
                    style={arrowProps.style}
                    css={`
                      transform: rotate(45deg);
                      position: absolute;
                      z-index: -1;
                      height: 10px;
                      width: 10px;
                      background-color: #f7f7f7;
                      ${top &&
                        css`
                          bottom: -6px;
                          border-bottom: 1px solid #ddd;
                          border-right: 1px solid #ddd;
                        `}
                      ${bottom &&
                        css`
                          top: -6px;
                          border-top: 1px solid #ddd;
                          border-left: 1px solid #ddd;
                        `}
                      ${right &&
                        css`
                          border-bottom: 1px solid #ddd;
                          border-left: 1px solid #ddd;
                          left: -6px;
                        `}
                      ${left &&
                        css`
                          right: -6px;
                          border-top: 1px solid #ddd;
                          border-right: 1px solid #ddd;
                        `}
                    `}
                  />
                  {/*
                    this span increases the tooltip hit-area on :hover, making it
                    harder to accidentally close
                  */}
                  <span
                    style={arrowProps.style}
                    css={`
                      position: absolute;
                      ${(top || bottom) &&
                        css`
                          height: 50px;
                          width: 100px;
                          ${top ? 'bottom' : 'top'}: -40px;
                          margin-left: -45px;
                        `};
                      ${(left || right) &&
                        css`
                          height: 50px;
                          width: 50px;
                          ${left ? 'right' : 'left'}: -40px;
                          margin-top: -20px;
                        `};
                    `}
                  />
                </span>
              )
            }}
          </Popper>
        </span>
      </Manager>
    )
  }
}

export default Info
