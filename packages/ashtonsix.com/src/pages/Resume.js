import {useEffect} from 'react'
import Helmet from 'react-helmet'

const Resume = () => {
  useEffect(() => {
    window.location.replace('/resume.pdf')
  }, [])

  return (
    <div
      style={{
        background: '#525659',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Helmet>
        <title>Ashton Six's resume</title>
        <meta name="description" content="Software engineer for 8 years" />
        <meta name="keywords" content="Ashton Six, resume" />
        <meta name="http-equiv" content="0;url=/resume.pdf" />
      </Helmet>
    </div>
  )
}

export default Resume
