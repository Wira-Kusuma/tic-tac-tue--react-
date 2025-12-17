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

  function handleClick(i) {
    const nextBtn = btn.slice();
    nextBtn[i] = "X"
    setBtn(nextBtn);
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