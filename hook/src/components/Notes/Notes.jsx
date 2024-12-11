import React,{useState} from 'react'
import Card from '../Card/Card'
import { EXAMPLES } from '../../data'

const Notes = () => {
    const [selectItem, setselectItem] = useState()

function handleChange(selected){
setselectItem(selected)
console.log(selected);

console.log(selectItem);

}
  return (
    <div className='card'>
    <div className='title'>
   <Card  isSelected={selectItem === "components"} onClick={()=>handleChange("components")}>Component</Card>
   <Card isSelected={selectItem === "jsx"}  onClick={()=>handleChange("jsx")}>JSX</Card>
   <Card isSelected={selectItem === "props"} onClick={()=>handleChange("props")}>Props</Card>
   <Card isSelected={selectItem === "state"} onClick={()=>handleChange("state")}>State</Card>
   </div>
   <div className='sub'>
    {selectItem? (
<>
    <h1>{EXAMPLES[selectItem].title}</h1>
    <p>{EXAMPLES[selectItem].description}</p>
    <p>{EXAMPLES[selectItem].code}</p>
    </>
    ):(
      <p>Please select the option</p>

    )}

   </div>
   </div>
  )
}

export default Notes
