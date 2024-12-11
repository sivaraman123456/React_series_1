import Card from "./Components/Card/Card";
import Content from "./Components/Content/Content";
import Task from "./Components/Task/Task";

function App() {
  function handleClick(content)
  {
    console.log({content});
    
  }
  return (
    <div id="app">
      <h1>Available Experts</h1>
      <Card name="Anthony Blake">
        <p>
          Blake is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a href="mailto:blake@example.com">Email Anthony</a>
        </p>
      </Card>

      <Card name="Maria Miles">
        <p>
          Maria is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a href="mailto:blake@example.com">Email Maria</a>
        </p>
      </Card>

<div className="content">
      <Content onSelect={()=>handleClick("Dynamic Content")} >Dynamic Content</Content>

      <Content onSelect={()=>handleClick("JSX")} >JSX</Content>

      <Content onSelect={()=>handleClick("Props")} >Props</Content>
      </div>


      <div>
        <Task/>
      </div>
    </div>
  );
}

export default App;
