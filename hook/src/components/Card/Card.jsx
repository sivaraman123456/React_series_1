import React from 'react'
import "./Card.css"
const Card = ({children,isSelected,...props}) => {
  return (
    <div className={isSelected ? 'active':''}>
     <p  {...props}>{children}</p> 
    
    </div>
  )
}

export default Card
