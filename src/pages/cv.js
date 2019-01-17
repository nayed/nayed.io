import React from 'react'
import Layout from '../components/layout'
import Company from '../components/cv/company'
import building from '../images/building.svg'

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

export default () => (
  <Layout>
    <h1 className="text-center">My Resume</h1>

    <h2>
      <img src={building} alt="building icon" style={{height: '60px'}} />
      Experiences
    </h2>

    {companies.map(item => (
      <Company job={item} key={companies.indexOf(item)} />
    ))}
  </Layout>
)
