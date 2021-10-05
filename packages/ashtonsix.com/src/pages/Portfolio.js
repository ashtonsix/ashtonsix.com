import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className="container">
      <h1>
        <Link to="/">Ashton Six</Link>'s portfolio
      </h1>
      <p>This is my portfolio. Here are some of my projects:</p>
      <h2>Energetics</h2>
      <p>
        A new theory of motion and energy based on time-irreversible mechanics,
        with high performance physics simulations included.{' '}
        <a target="_blank" rel="noopener" href="https://energeticsproject.com">
          energeticsproject.com
        </a>
      </p>
      <h2>Salamander</h2>
      <p>
        A deep learning platform I created in 2018 and later sold to{' '}
        <a target="_blank" rel="noopener" href="https://fast.ai">
          fast.ai
        </a>
        . It is no longer available, but you can still{' '}
        {/* <a href="/p/salamander">read about it</a>, and{' '} */}
        <a href="/p/salamander">see what it looked like</a>.
      </p>
      <h2>Closeness Lines</h2>
      <p>
        A tool to show how relationships evolve with time.{' '}
        <a href="/p/closenesslines">/p/closenesslines</a>,{' '}
        <a
          rel="noopener"
          target="_blank"
          href="https://github.com/ashtonsix/closenesslines"
        >
          source
        </a>
      </p>
      <h2>Price Paid</h2>
      <p>
        A visualisation of house prices in the UK.{' '}
        <a href="/p/pricepaid">/p/pricepaid</a>,{' '}
        <a
          rel="noopener"
          target="_blank"
          href="https://github.com/ashtonsix/price-paid"
        >
          source
        </a>
      </p>
      <h2>Can You Sell Science?</h2>
      <p>
        An article about NFTs.{' '}
        <a
          rel="noopener"
          target="_blank"
          href="https://ashtonsix.substack.com/p/nft-science"
        >
          /p/nft-science
        </a>
      </p>
    </div>
  )
}

export default Home
