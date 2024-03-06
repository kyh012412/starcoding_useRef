import { useEffect, useRef, useState } from 'react';
import './App.css';

//자동 focus하려는 중
function App() {
  const inputRef = useRef();

  useEffect(()=>{
    console.log(inputRef);
  },[])

  return (
    <div>
      <input ref={inputRef} type="text" placeholder='username'/>
      <button>로그인</button>
    </div>
  );
}

export default App;
