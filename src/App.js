import React, { useState } from 'react'
import './App.css'

function App() {
  const [results,setResult]=useState('')
  const onClickHandler =e=>{
        setResult(results.concat(e.target.name))

  }
  const clearHandler =()=>{
  setResult('')
  }
  const backspaceHandler =()=>{
    setResult(results.slice(0,results.length-1));
  }
  const calculate =()=>{
    try {
      setResult(eval(results).toString())
    }
    catch(error){
      setResult('Error')
    }
    
  }
  return (
    <div  className='container'>
      <form>
        <input type={'text'} value={results}/>
      </form>

<div className='keypad'>
      <button className='highlight' id='clear'  onClick={clearHandler}>Clear</button>
      <button className='highlight' id='backspace'onClick={backspaceHandler}>C</button>
      <button className='highlight' name='/' onClick={onClickHandler}>&divide;</button>
      <button name='7' onClick={onClickHandler}>7</button>
      <button name='8' onClick={onClickHandler}>8</button>
      <button name='9' onClick={onClickHandler}>9</button>
      <button className='highlight' name='*' onClick={onClickHandler}>&times;</button>
      <button name='4' onClick={onClickHandler}>4</button>
      <button name='5' onClick={onClickHandler}>5</button>
      <button name='6' onClick={onClickHandler}>6</button>
      <button className='highlight' name='-' onClick={onClickHandler}>&ndash;</button>
      <button name='1' onClick={onClickHandler}>1</button>
      <button name='2' onClick={onClickHandler}>2</button>
      <button name='3' onClick={onClickHandler}>3</button>
      <button className='highlight' name='+' onClick={onClickHandler}>+</button>
      <button name='0' onClick={onClickHandler}>0</button>
      <button name='.' onClick={onClickHandler}>.</button>
      <button className='highlight' id='results' name='=' onClick={calculate}>=</button>
    </div>
    </div>
    
  )
}

export default App