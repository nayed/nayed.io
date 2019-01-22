import React from 'react'
import styled from 'styled-components'
import {Badge} from './../badge'

const Skill = styled.div`
  margin-bottom: 15px

  h3 {
    display: inline
  }

  span {
    display: inline
    font-size: 20px
    margin-right: 10px
  }
`

const SkillItem = styled.div`
  display: block;

  @media (min-width: 576px) {
    margin: 15px 80px 0 80px;
  }
`

const Row = styled.div`
  display: block;

  * {
    display: inline-block !important;
  }
`

export default () => (
  <Skill>
    <SkillItem>
      <Row>
        <h3>Proficent: </h3>
        <Badge BGColor="#ffc107">Javascript</Badge>
        <Badge BGColor="#61dafb">React</Badge>
        <Badge BGColor="#00cc99">NodeJS</Badge>
        <Badge primary>HTML</Badge>
        <Badge primary>CSS</Badge>
        <Badge BGColor="#5E8C31">VIM</Badge>
      </Row>
    </SkillItem>

    <SkillItem>
      <Row>
        <h3>Knowledgeable: </h3>
        <Badge BGColor="#91cbff">Go</Badge>
        <Badge BGColor="#629ccd">Python</Badge>
        <Badge BGColor="#fd0e35">Ruby</Badge>
        <Badge>SQL</Badge>
        <Badge>Git</Badge>
        <Badge>Docker</Badge>
      </Row>
    </SkillItem>
  </Skill>
)
