import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

const FunctionalComponent = () => {
    let userName = useRef();
    const [user,setUser] = useState();
    const [count,setCount] = useState(0);
    const [frame,setFrame] = useState("REACT");
    const [lang,setLang] = useState("REACT");
    const [timer,setTimer] = useState(0);

    function ShowUsername() {
        setUser(userName.current.value)
    }

    useEffect(()=> {
        console.log("useEffect")
    },[count,lang])

    
    const Increase = () =>{
        setCount(count+1)
    }

    const ChangeFr = (e) => {
        //console.log(e.target.value)
        setFrame(e.target.value)
    }

  return (
    <div className='FunctionalComponent'>
        <h4>{count}</h4>
        <button onClick={Increase}>Increase</button>
        <h1>SELECTED FRAMEWORK: <span className={frame}>{frame}</span></h1>
        <button value="REACT" onClick={ChangeFr}>REACT</button>
        <button value="ANGULAR" onClick={ChangeFr}>ANGULAR</button>
        <button value="VUE" onClick={ChangeFr}>VUE</button>

        <h1>{user}</h1>
        <input type="text" ref={userName}/>
        <button onClick={ShowUsername}>Show</button>
    </div>
  )
}

export default FunctionalComponent


// LifeCycle Methods - componentDidMount / componentDidUpdate
// Mounting 
// Updating
// Unmounting