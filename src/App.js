import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(1);
  const ref = useRef(1);
  
  //countVar는 랜더링이 다시 될때 초기화가됨
  let countVar = 0;

  useEffect(()=>{
    console.log('🎉렌더링...');
    ref.current = ref.current+1;
    console.log('ref count : '+ref.current);
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
