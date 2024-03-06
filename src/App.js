import { useEffect, useRef, useState } from 'react';
import './App.css';

//자동 focus하려는 중
function App() {
  const inputRef = useRef();

  useEffect(()=>{
    // console.log(inputRef);
    inputRef.current.focus();    
  },[])

  const handleClick = () =>{
    alert(`환영합니다. ${inputRef.current.value}!`);
    inputRef.current.focus();    
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder='username'/>
      <button onClick={handleClick}>로그인</button>
    </div>
  );
}

export default App;
