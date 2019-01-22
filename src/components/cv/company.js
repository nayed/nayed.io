import React from 'react'
import styled from 'styled-components'

import {
  Card,
  CardHeader,
  CardHeaderTop,
  CardHeaderTitle,
  CardHeaderDates,
  CardHeaderLocation,
  CardBody,
  CardBodyTitle,
  CardBodyText
} from '../card'

const Tech = styled.h5`
  margin-bottom: 0;
  color: #00755e;
`
export default props => (
  <Card>
    <CardHeader>
      <CardHeaderTop>
        <CardHeaderTitle>{props.job.name}</CardHeaderTitle>
        <CardHeaderDates>{props.job.dates}</CardHeaderDates>
      </CardHeaderTop>
      <CardHeaderLocation>{props.job.location}</CardHeaderLocation>
    </CardHeader>
    <CardBody>
      <CardBodyTitle>{props.job.title}</CardBodyTitle>
      <CardBodyText>
        {props.job.tasks.map(task => (
          <li key={props.job.tasks.indexOf(task)}>{task}</li>
        ))}
        {props.job.link && (
          <li>
            <a href={props.job.link}>{props.job.link}</a>
          </li>
        )}
      </CardBodyText>
      {props.job.tech && <Tech>Tech used: {props.job.tech.join(', ')}</Tech>}
    </CardBody>
  </Card>
)
