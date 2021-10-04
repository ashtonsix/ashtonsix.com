import {Link} from 'react-router-dom'
import avatar from './avatar250.jpg'

const Home = () => {
  return (
    <div className="container">
      <h1>Ashton Six</h1>
      <p>This is my website. Here are my links:</p>
      <ul>
        <li>
          <a target="_blank" href="/resume.pdf">
            Resume
          </a>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener"
            href="https://energeticsproject.com"
          >
            Energetics
          </a>
        </li>
      </ul>
      <p>Here is a short story:</p>
      <div style={{paddingLeft: '1em', borderLeft: '3px solid #999'}}>
        <p>
          The universe was big once. First came the cloud-eaters. They ate the
          clouds, and it was always sunny after that. Then came the sky-eaters.
          They ate the skies, and the stars shone brighter than they ever had.
        </p>
        <p>
          Last came the space-eaters. They ate the emptiness between stars,
          pulled them closer together. What was once too far away to see came
          close. God and all her creation fit inside a cardboard box, we meet
          her at the end of the world and say goodbye. When all the emptiness
          goes, so will everything. There will be a new emptiness for whoever
          comes next.
        </p>
      </div>
      <p>Here is a drawing of me:</p>
      <img
        alt="Drawing of Ashton Six, with fluffy hair and a red jumper"
        src={avatar}
        style={{width: 250, height: 250}}
      />
      <p>I wish you happiness, health and purpose.</p>
    </div>
  )
}

export default Home
