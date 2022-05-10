import { useEffect, useState } from 'react';
import Wordle from './components/Wordle'


function App() {
  const [solution, setSolution] = useState();

  useEffect(()=>{
    fetch("http://localhost:3001/solutions").then(res => res.json()).then(json => {
      const random = json[Math.floor(Math.random() * json.length)]
      setSolution(random.word)
    })
  },[])
  return (
    <div className="App">
      <h1>Bloker's Wordle</h1>
      {solution && <Wordle solution={solution}/>}
    </div>
  );
}

export default App
