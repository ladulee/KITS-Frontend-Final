import { useState } from 'react'
import './App.css'

function App() {
  const [tien1, setTien1] = useState("USD")
  const [tien2, setTien2] = useState("VND")
  const [tien1Value, setTien1Value] = useState(0);
  const [tien2Value, setTien2Value] = useState(0);
  return (
    <div className='chua'>
      <div className='doiTien'>
        <div className='khoi1'>
          <label >{tien1}</label>
          <input type="number" value={tien1Value} onChange={(e) => {
            setTien1Value(e.target.value);
            let tygia = 1.0/24000;
            if (tien1 === 'USD' && tien2 === "VND") {
              tygia = 24000
            }
            setTien2Value(+e.target.value * tygia);
          }}/>
        </div>
        <div className='khoi1'>
          <label >{tien2}</label>
          <input type="number" value={tien2Value} readOnly={true}/>
          </div>
      </div>
      <div className='btn-chuyen'>
        <button onClick={()=>{
          setTien1(tien2);
          setTien1Value("");
          setTien2(tien1);
          setTien2Value("");
        }}>{tien1} 	↔ {tien2}</button>
      </div>
    </div>
  )
}

export default App
