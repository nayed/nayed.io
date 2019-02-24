import React from 'react'

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

export default props => (
  <Card borderColor={props.borderColor}>
    <CardHeader>
      <CardHeaderTop>
        <CardHeaderTitle>{props.education.name}</CardHeaderTitle>
        <CardHeaderDates>{props.education.dates}</CardHeaderDates>
      </CardHeaderTop>
      <CardHeaderLocation>{props.education.location}</CardHeaderLocation>
    </CardHeader>
    <CardBody>
      <CardBodyTitle>{props.education.title}</CardBodyTitle>
      <CardBodyText>
        {props.education.info.map(item => (
          <li key={props.education.info.indexOf(item)}>{item}</li>
        ))}
      </CardBodyText>
    </CardBody>
  </Card>
)
