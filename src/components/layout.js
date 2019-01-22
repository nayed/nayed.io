import React from 'react'
import styled from 'styled-components'

import Nav from './nav'
import GlobalStyles from './globalStyles'
import Footer from './footer'

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`

const Main = styled.main`
  flex: 1;
`

export default ({children}) => (
  <>
    <GlobalStyles />
    <Container>
      <Nav />
      <hr />

      <Main>{children}</Main>
      <Footer />
    </Container>
  </>
)
