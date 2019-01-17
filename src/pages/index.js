import React from 'react'
import Layout from '../components/layout'
import avatar from '../images/avatar.svg'

const calculateMyAge = () => {
  const birth = new Date(1992, 1, 6)
  const today = Date.now()
  const age = new Date(today - birth.getTime())
  return <span style={{color: '#00CC99'}}>{age.getUTCFullYear() - 1970}</span>
}

export default () => (
  <Layout>
    <div className="jumbotron" style={{borderColor: '#midnightblue'}}>
      <span style={{display: 'inline-block'}}>
        <img
          src={avatar}
          alt="home icon"
          style={{height: '250px', display: 'inline'}}
        />
        <h1
          className="display-1 text-right"
          style={{display: 'inline', paddingLeft: '60px'}}>
          H<span style={{color: '#00CCCC'}}>e</span>ll
          <span style={{color: '#E77200'}}>o</span> w
          <span style={{color: '#E30B5C'}}>o</span>rld
          <span style={{color: '#02A4D3'}}>!</span>
        </h1>
      </span>
      <hr style={{borderColor: '#0081AB'}} />
      <h2 className="text-center">
        <span style={{color: '#FF3399'}}>Nayed</span> Saïd Ali |{' '}
        {calculateMyAge()} years{' '}
        <span style={{textDecoration: 'line-through', color: '#C3CDE6'}}>
          {' '}
          old
        </span>{' '}
        | <span style={{color: '#FFC107'}}>developer</span>
      </h2>
    </div>
  </Layout>
)
