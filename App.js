import React ,{useState} from 'react';
import './index.css';

const today = new Date().toLocaleTimeString();

const App = () =>{
  const state = useState();
  const [time,updated] =useState(today);

  const nowTime = () =>{
  let  ttoday = new Date().toLocaleTimeString();
     updated(ttoday);
  }
  setInterval(nowTime,1);
  return(
    <>
    <div className="count">
    <h1>{time}</h1>
  
    </div>
    </>
  )
}

export default App;
