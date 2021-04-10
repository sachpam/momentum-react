import "./Time.css";
import { useEffect, useState } from 'react';

function Time(props) {

  const dt = new Date();
  const hours = dt.getHours();
  const mins = (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
  // const s = dt.getSeconds();
  const sec = (dt.getSeconds() < 10 ? '0' : '') + dt.getSeconds();
  // const sec = (s<10?'0':'' )+ s ;
    
  const [time, setTime] = useState(hours + ":" + mins + ":" + sec) ;

  useEffect(() => {
    setInterval(() => {
        const dt = new Date();
        const hours = dt.getHours();
        const mins = (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
        const sec = (dt.getSeconds() < 10 ? '0' : '') + dt.getSeconds();
      setTime(hours + ":" + mins + ":" + sec)
    }, 1000)
  }, [])


    return (
        <div className="time">
            <h1>{time}</h1>
            <h2>{props.quote}</h2>
            <h3>What is Your Main Focus for Today?</h3>
            <hr/>
        </div>
 
    )
}

export default Time;