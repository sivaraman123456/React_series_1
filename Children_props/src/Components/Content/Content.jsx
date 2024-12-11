import React from 'react'
import "./Content.css"
const Content = ({children,onSelect}) => {
  return (
    <div className='data'>
    <div>{children}</div>  
    <div>
    <button onClick={onSelect}>Click Button</button>

    </div>
    </div>
  )
}

export default Content
