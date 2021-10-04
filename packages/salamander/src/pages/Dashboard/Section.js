import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShare} from '@fortawesome/free-solid-svg-icons'
import history from 'misc/history'

const SectionHeader = ({
  children,
  id,
  open,
  icon,
  iconColor,
  externalLink,
  onClick,
  ...props
}) => (
  <div>
    <a
      href={id && '#' + id}
      onClick={e => {
        // we want all anchor link behaviour (eg, right-click to copy), except
        // for changing the URL on left-click
        e.preventDefault()
        onClick()
      }}
      css={`
        text-decoration: none;
        padding: 6px;
        padding-bottom: 0;
        margin: -6px;
        margin-bottom: 0;
        display: inline-block;

        & > h2 {
          display: inline-block;
          border-bottom: 1px solid transparent;
        }

        ${open && `cursor: default`};

        &:hover > h2,
        &:focus > h2 {
          ${!open && `color: #1890ff`};
          border-bottom: 1px dashed #1890ff;
        }

        &:active > h2 {
          ${!open && `border-bottom: 1px solid #1890ff`};
          border-bottom: 1px solid #1890ff;
        }

        &:active,
        &:hover,
        &:focus {
          outline: 0;
          text-decoration: none;
        }
      `}
    >
      <h2
        {...props}
        id={id}
        css={`
          position: relative;
        `}
      >
        <span
          css={`
            position: absolute;
            left: -1.2em;
            padding-right: 0.3em;
            top: -0.35em;
            color: ${iconColor || `#f37a49`};
            font-size: 2.25rem;
            width: 40px;
            display: inline-block;
            text-align: right;
            @media (max-width: 650px) {
              left: -1.02em;
              text-align: center;
            }
          `}
        >
          <FontAwesomeIcon icon={icon} />
        </span>
        {children}
        {/*
          this <div /> increases the heading's hitbox, without premature
          linebreaks on mobile
        */}
        <div
          css={`
            position: absolute;
            top: 0px;
            right: -3.2em;
            width: 3.3em;
            height: 100%;
            margin-bottom: 0.5em;
          `}
        />
      </h2>
    </a>
    {!!externalLink && (
      <a
        href={externalLink}
        target="_blank"
        rel="noopener noreferrer"
        css={`
          position: relative;
          padding-left: 0.3em;
          top: 0.05em;
          font-size: 1.9rem;
          width: 40px;
          display: inline-block;
          text-align: left;
          z-index: 10;
          @media (max-width: 650px) {
            left: -1.02em;
            text-align: center;
          }
          &:hover {
            color: #1890ff;
          }
        `}
      >
        <FontAwesomeIcon icon={faShare} />
      </a>
    )}
  </div>
)

const idMatch = (id, location) => id === location.hash.slice(1)

class Section extends React.Component {
  unlisten = () => {}
  state = {open: false}
  constructor(props) {
    super()

    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.state = {
      open: idMatch(props.id, history.location) || !!props.initialOpen
    }
  }
  componentDidMount() {
    this.unlisten = history.listen((location, action) => {
      if (action !== 'POP') return
      if (typeof location.hash !== 'string') return
      const {open} = this.state
      const {id} = this.props
      if (idMatch(id, location) && !open) this.setState({open: true})
    })
  }
  componentWillUnmount() {
    this.unlisten()
  }
  componentDidUpdate(prevProps, prevState) {
    let {id} = this.props
    const closed = !this.state.open && prevState.open

    if (closed && idMatch(id, history.location)) history.push({hash: null})
  }
  open() {
    this.setState({open: true})
  }
  close() {
    this.setState({open: false})
  }
  render() {
    const {open} = this.state
    const {id, title, icon, iconColor, externalLink, children} = this.props

    return (
      <>
        <SectionHeader
          id={id}
          open={open}
          icon={icon}
          iconColor={iconColor}
          externalLink={externalLink}
          onClick={() => this.setState(({open}) => ({open: !open}))}
        >
          {title}
        </SectionHeader>
        {open && children}
      </>
    )
  }
}

export default Section
