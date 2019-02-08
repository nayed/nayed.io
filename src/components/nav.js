import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import home from '../images/home.svg'
import cv from '../images/cv.svg'
import github from '../images/github.svg'
import blog from '../images/blog.svg'

const Nav = styled.header`
  margin: 15px 0 5px 0;
  height: 50px;
`
const Li = styled.li`
  display: inline-block;
  margin-right: 1rem;
`

const ListLink = props => (
  <Li>
    <Link to={props.to}>{props.children}</Link>
  </Li>
)

const HomeIcon = styled.div`
  display: inline;
`

const Img = styled.img`
  height: 50px;
`

const Menu = styled.ul`
  list-style: none;
  float: right;
`

export default () => (
  <Nav>
    <HomeIcon>
      <Link to="/">
        <Img src={home} alt="home icon" />
      </Link>
    </HomeIcon>
    <Menu>
      <ListLink to="/cv/">
        <Img src={cv} alt="cv icon" />
      </ListLink>
      <a href="https://nayed.blog">
        <Img src={blog} alt="blog icon" />
      </a>
      <a href="https://github.com/nayed">
        <Img src={github} alt="github icon" />
      </a>
    </Menu>
  </Nav>
)
