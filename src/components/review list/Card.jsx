import React from 'react'
import "./card.css"


function Card(props) {
    const{item}=props
    return (
        <div className="card">
          <span className="title" >{item.title}</span>
          <span className="description">{item.description}</span>
        </div>
    )
}
 
export default Card
