import React, { useState, useEffect } from "react";
// import "./styles.css";

export default function App(props) {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(props.time);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return (
    <div className="App">
      <h1>CountDown!</h1>
      <div>
        <h2>
          {seconds < 10 ? `0${seconds}` : seconds} 초 남았습니다.
          {/* {minutes}:{seconds < 10 ? `0${seconds}` : seconds} */}

        </h2>
        {
          seconds === 0
          ? <p>라이어게임 종료! 제시어는 -{props.sub} 였습니다.-</p>
          : null
        }
      </div>
    </div>
  );
}
