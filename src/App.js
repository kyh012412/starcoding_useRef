import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0);
  const countRef = useRef(0);
  
  console.log('🎉렌더링...');

  const increaseCountState = () =>{
    setCount(count +1);
  }

  const increaseRefState = () =>{
    countRef.current = countRef.current +1;
    console.log(countRef.current);
  }

  return (
    <div>
      <p>Stage: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseCountState}>State 올리기</button>      
      <button onClick={increaseRefState}>Ref 올리기</button>
    </div>
  );
}

export default App;
