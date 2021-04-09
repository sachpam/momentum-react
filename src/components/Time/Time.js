import "./Time.css";
import { useEffect, useState } from 'react';

function Time(props) {

  const dt = new Date();
  const hours = dt.getHours();
  const mins = dt.getMinutes();
  const sec = dt.getSeconds();
    
  const [time, setTime] = useState(hours + ":" + mins + ":" + sec) ;

  useEffect(() => {
    setInterval(() => {
        const dt = new Date();
        const hours = dt.getHours();
        const mins = dt.getMinutes();
        const sec = dt.getSeconds();
      setTime(hours + ":" + mins+ ":" + sec)
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