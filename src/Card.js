import React from 'react'
import './Card.css'

function Card(props) {

  console.log(props)

  return (
    <div className="Card">
      <div
        className="colorStripe"
        style={{ backgroundColor: props.color }}
      ></div>
      <h3>{props.title}</h3>
      <p>{props.descrip}</p>
      <img src={props.icon} alt={props.iconAltText} />
    </div>
  )
}

export default Card
