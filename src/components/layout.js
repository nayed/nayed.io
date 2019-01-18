import React from 'react'
import {Link} from 'gatsby'
import {Helmet} from 'react-helmet'

import home from '../images/home.svg'
import cv from '../images/cv.svg'
import github from '../images/github.svg'
import '../styles/design.css'
// import 'bootswatch/dist/sketchy/bootstrap.css'

const ListLink = props => (
  <li style={{display: 'inline-block', marginRight: '1rem'}}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({children}) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Nayed Saïd Ali</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.2.1/sketchy/bootstrap.min.css"
      />
    </Helmet>

    <div
      className="container"
      style={{
        color: '#191970',
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
        paddingTop: '20px'
      }}>
      <header>
        <Link to="/" style={{textShadow: 'none', backgroundImage: 'none'}}>
          <h3 style={{display: 'inline'}}>
            <img src={home} alt="home icon" style={{height: '50px'}} />
          </h3>
        </Link>
        <ul style={{listStyle: 'none', float: 'right'}}>
          <ListLink to="/cv/">
            <img src={cv} alt="cv icon" style={{height: '50px'}} />
          </ListLink>
          <a href="https://github.com/nayed">
            <img src={github} alt="github icon" style={{height: '50px'}} />
          </a>
        </ul>
      </header>
      <hr />

      <main style={{flex: '1'}}>{children}</main>

      <footer className="text-center">
        Nayed Saïd Ali - Copyright © {new Date().getFullYear()}
      </footer>
    </div>
  </>
)
