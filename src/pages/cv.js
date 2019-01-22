import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Company from '../components/cv/company'
import Education from '../components/cv/education'
import Skill from '../components/cv/skill'

import building from '../images/building.svg'
import ruler from '../images/ruler.svg'
import chemistry from '../images/chemistry.svg'

const companies = [
  {
    name: 'Oh BiBi',
    dates: 'April 2018 - September 2018',
    location: 'Paris, France',
    title: 'Full Stack Developer',
    tasks: [
      'Developed React app to help managing users data',
      'Developed various ETL',
      'Help maintained k8s servers'
    ],
    tech: ['React', 'Go', 'Python', 'MySQL', 'Bash', 'Google Cloud Platform']
  },
  {
    name: 'Segeco Consulting',
    dates: 'March 2015 - February 2017',
    location: 'Lyon, France',
    title: 'Developer (intern)',
    tasks: [
      'Part of the developer team',
      'Maintained and developed modules for an internal web app that will help clients manage their projects'
    ],
    tech: ['Php', 'ExtJS', 'MySQL']
  },
  {
    name: 'Appsolute',
    dates: 'January 2014 - March 2014',
    location: 'Villeurbanne, France',
    title: 'Developer (intern)',
    tasks: [
      'Social media app: Daylimiter',
      'Conceived the database',
      'Developed the API that will be consumed by the Android and iOS team'
    ],
    tech: ['Php', 'MySQL']
  },
  {
    name: 'Lycée La Martinière Duchère',
    dates: 'May 2013 - June 2013',
    location: 'Lyon, France',
    title: 'Developer (intern)',
    tasks: ['Computed data from a quiz about high-schooler knowledge on STD'],
    link: 'http://nayed.fr/quizz-sida/analyse.php',
    tech: ['Php', 'Javascript (Google Chart)', 'MySQL']
  },
  {
    name: 'Hospices Civils de Lyon',
    dates: 'May 2012 - June 2013',
    location: 'Lyon, France',
    title: 'IT (intern)',
    tasks: ['Helped and assisted the IT team on their daily tasks']
  }
]

const education = [
  {
    name: 'IP Formation',
    dates: 'March 2015 - February 2017',
    location: 'Lyon, France',
    title: 'Developer Program',
    info: [
      'Computer Science formation',
      '3 weeks on internship and 1 week at school each months'
    ]
  },
  {
    name: 'Lycée La Martinière Duchère',
    dates: 'September 2011 - June 2014',
    location: 'Lyon, France',
    title: 'BTS SIO (Computer Science)',
    info: ['French technical degree']
  },
  {
    name: 'Lycée Condorcet',
    dates: 'September 2008 - June 2011',
    location: 'Saint-Priest, France',
    title: 'BAC STG',
    info: ['French high-school degree']
  }
]

const Img = styled.img`
  height: 50px
  vertical-align: middle
`

const H2 = styled.h2`
  margin-bottom: 0;
`

export default () => (
  <Layout>
    <H2>
      <Img src={building} alt="building icon" style={{height: '50px'}} />
      Experiences
    </H2>
    {companies.map(item => (
      <Company job={item} key={companies.indexOf(item)} />
    ))}

    <H2>
      <Img src={ruler} alt="building icon" style={{height: '50px'}} />
      Education
    </H2>
    {education.map(item => (
      <Education education={item} key={education.indexOf(item)} />
    ))}

    <H2>
      <Img src={chemistry} alt="building icon" style={{height: '50px'}} />
      Skills
    </H2>
    <Skill />
  </Layout>
)
