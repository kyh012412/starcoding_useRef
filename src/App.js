import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [renderer,setRenderer] = useState(0);
  const countRef = useRef(0);
  
  //countVar는 랜더링이 다시 될때 초기화가됨
  let countVar = 0;

  console.log('🎉렌더링...');

  const increaseRef = () =>{
    countRef.current = countRef.current +1;
    console.log(countRef.current);
  }

  const increaseVar = () =>{
    countVar = countVar +1;
    console.log('var: ',countVar);
  }
  const doRender = ()=> {
    setRenderer(renderer+1);
  }

  const printResults = () =>{
    console.log(`ref: ${countRef.current}, var: ${countVar}`);
  }

  return (
    <div>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={increaseRef}>Ref 올리기</button>      
      <button onClick={increaseVar}>Var 올리기</button>
      <button onClick={doRender}>렌더!</button>
      <button onClick={printResults}>Ref Var 값 출력</button>
    </div>
  );
}

export default App;
