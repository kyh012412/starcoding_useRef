import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0);
  const [renderCount,setRenderCount] = useState(1);
  
  //countVar는 랜더링이 다시 될때 초기화가됨
  let countVar = 0;

  useEffect(()=>{
    console.log('🎉렌더링...');
    console.log(renderCount+1);
    setRenderCount(renderCount+1);
  })

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={()=>{
        setCount(count+1)
      }}>count 올리기</button>
    </div>
  );
}

export default App;
