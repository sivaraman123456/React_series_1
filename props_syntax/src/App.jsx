import { useState } from 'react'
import './App.css'
import { CORE_CONCEPTS } from './data'
import Dynamic from './components/Dynamic/Dynamic'

// function CoreConcepts(props)
// {
// return(
//   <div>
//     <img src={props.img} alt={props.title} />
//     <h1>{props.tile}</h1>
//     <h3>{props.desc}</h3>
//   </div>
// )
// }

//destructuring the props ;

function CoreConcepts({image,title,description})
{
return(
  <div>
    <img src={image} alt={title} />
    <h1>{title}</h1>
    <h3>{description}</h3>
  </div>
)
}
export const DUMMY_TODOS = [
  'Learn React',
  'Practice React',
  'Profit!'
];
function App() {
  const [count, setCount] = useState(0)
var a=null;
console.log(typeof a);

  return (
    <>
     
      <h1>Vite + React</h1>
      <div className='card'>
      <CoreConcepts 
      title={CORE_CONCEPTS[1].title}
      description ={CORE_CONCEPTS[1].description}
      image={CORE_CONCEPTS[1].image}
      />
 <CoreConcepts 
      title={CORE_CONCEPTS[2].title}
      description ={CORE_CONCEPTS[2].description}
      image={CORE_CONCEPTS[2].image}
      />
{/* if you have lot of props than you can pass the object in spread operator    ------*/}
{/* <CoreConcepts {...CORE_CONCEPTS[1]} />   */}


{/* Instead of printing above code we can use dynamically show the data list by using map() -----*/}

{
  CORE_CONCEPTS.map((concept)=>(
    <CoreConcepts key={concept.title} {...concept}/>
  ))
}

</div>

<ul>
{DUMMY_TODOS.map((todo,index)=>(
<Dynamic key={index} test={todo} />

))}
</ul>
    </>
  )
}

export default App
