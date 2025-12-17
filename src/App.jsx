import { useState } from 'react'
import './index.css'

function Btn({value, onBtnClick}){
  return (
    <div className='button' onClick={onBtnClick}>
      {value}
    </div>
  );
} 

export default function Box(){
  const [btn, setBtn] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true) 
  function handleClick(i) {
    const nextBtn = btn.slice();
    // if btn already filled, can't fill it again
    if (btn[i]) return;
    // using if else 
    // if(xIsNext) {
    //   nextBtn[i] = "X"
    // } else {
    //   nextBtn[i] = "O"
    // }
    // using ternary alternative from if else
    nextBtn[i] = xIsNext ? "X" : "O" ;
    setBtn(nextBtn);
    setXIsNext(!xIsNext)
  }
  
  return(
    <div className='box'>

      <Btn value={btn[0]} onBtnClick={() => handleClick(0)}/>
      <Btn value={btn[1]} onBtnClick={() => handleClick(1)}/>
      <Btn value={btn[2]} onBtnClick={() => handleClick(2)}/>
      <Btn value={btn[3]} onBtnClick={() => handleClick(3)}/>
      <Btn value={btn[4]} onBtnClick={() => handleClick(4)}/>
      <Btn value={btn[5]} onBtnClick={() => handleClick(5)}/>
      <Btn value={btn[6]} onBtnClick={() => handleClick(6)}/>
      <Btn value={btn[7]} onBtnClick={() => handleClick(7)}/>
      <Btn value={btn[8]} onBtnClick={() => handleClick(8)}/>
    </div>
  )
}