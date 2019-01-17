import React from 'react'

export default props => (
  <div className="card border-success mb-3 education">
    <div className="card-header">
      <h3>
        <span>{props.education.name}</span>
        <span className="right">{props.education.dates}</span>
      </h3>
      <h5 className="education-location">{props.education.location}</h5>
    </div>
    <div className="card-body">
      <h4 className="card-title">{props.education.title}</h4>
      <ul className="card-text">
        {props.education.info.map(item => (
          <li key={props.education.info.indexOf(item)}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
)
