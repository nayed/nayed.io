import React from 'react'
import {Link} from 'gatsby'
import home from '../images/home.svg'
import cv from '../images/cv.svg'
import github from '../images/github.svg'
import '../styles/design.css'
import 'bootswatch/dist/sketchy/bootstrap.css'

const ListLink = props => (
  <li style={{display: 'inline-block', marginRight: '1rem'}}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({children}) => (
  <div className="container" style={{color: '#191970'}}>
    <header style={{marginBottom: '1.5rem'}}>
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

    {children}
  </div>
)