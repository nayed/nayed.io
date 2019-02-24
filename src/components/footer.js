import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  margin: 3rem 0 2rem 0;
  text-align: center;
`

export default () => (
  <Footer>Nayed Saïd Ali - Copyright © {new Date().getFullYear()}</Footer>
)
