import React from 'react'
import styled from 'styled-components'

import avatar from '../../images/avatar.svg'

const calculateMyAge = () => {
  const birth = new Date(1992, 1, 6)
  const today = Date.now()
  const age = new Date(today - birth.getTime())
  return <span style={{color: '#00CC99'}}>{age.getUTCFullYear() - 1970}</span>
}

const Welcome = styled.div`
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: transparent;
  border-radius: 555px 25px 15px 25px/25px 5px 35px 555px;
  border: 2px solid midnightblue;

  @media (min-width: 576px) {
    padding: 4rem 2rem;
  }
`

const Top = styled.div`
  display: inline-block;
  text-align: center;
  height: 250px;
  width: 100%;
`

const Img = styled.img`
  height: 250px;
  display: inline;
  vertical-align: middle;
  border-style: none;
  margin-right: 50px;
`

const HelloWorld = styled.h1`
  font-size: 6rem;
  font-weight: 300;
  line-height: 1.2;
  display: inline;
`

const Bottom = styled.div`
  text-align: center;
  font-size: 2rem;
  width: 100%;
`

const NayedIntro = styled.h3`
  vertical-align: middle;
`

export default () => (
  <Welcome>
    <Top>
      <Img src={avatar} alt="nayed's avatar" />
      <HelloWorld>
        H<span style={{color: '#00CCCC'}}>e</span>ll
        <span style={{color: '#E77200'}}>o</span> w
        <span style={{color: '#E30B5C'}}>o</span>rld
        <span style={{color: '#02A4D3'}}>!</span>
      </HelloWorld>
    </Top>
    <hr style={{borderColor: '#0081AB'}} />
    <Bottom>
      <NayedIntro>
        <span style={{color: '#FF3399'}}>Nayed</span> Saïd Ali |{' '}
        {calculateMyAge()} years{' '}
        <span style={{textDecoration: 'line-through', color: '#C3CDE6'}}>
          {' '}
          old
        </span>{' '}
        | <span style={{color: '#FFC107'}}>developer</span>
      </NayedIntro>
    </Bottom>
  </Welcome>
)
