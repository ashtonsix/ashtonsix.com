import {Link} from 'react-router-dom'

const SalamanderInteractive = () => {
  return (
    <div className="frame">
      <header>
        <h1>
          <Link to="/">Ashton Six</Link>'s Salamander, go back to the{' '}
          <Link to="/portfolio">portfolio</Link>
        </h1>
      </header>
      <div
        style={{
          borderTop: '1px solid #999',
          background: '#fff',
          flexGrow: 1,
        }}
      >
        <iframe
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          title="Salamander Interactive"
          src="/x/salamander"
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default SalamanderInteractive
