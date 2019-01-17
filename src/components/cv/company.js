import React from 'react'

export default props => (
  <div className="card border-info mb-3 company">
    <div className="card-header">
      <h3>
        <span>{props.job.name}</span>
        <span className="right">{props.job.dates}</span>
      </h3>
      <h5 className="company-location">{props.job.location}</h5>
    </div>
    <div className="card-body">
      <h4 className="card-title">{props.job.title}</h4>
      <ul className="card-text">
        {props.job.tasks.map(task => (
          <li key={props.job.tasks.indexOf(task)}>{task}</li>
        ))}
        {props.job.link && (
          <li>
            <a href={props.job.link}>{props.job.link}</a>
          </li>
        )}
      </ul>
      {props.job.tech && (
        <h5 className="company-tech">Tech used: {props.job.tech.join(', ')}</h5>
      )}
    </div>
  </div>
)
