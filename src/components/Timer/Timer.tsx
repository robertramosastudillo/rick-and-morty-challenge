import { useState, useEffect } from "react";
import { TimerContainer } from "./Timer.styled";
export const Timer = ({ reStartTime, stoptTime }: any) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    let sampleInterval = setInterval(() => {
      if (seconds === 59) {
        setMinutes((prevCount) => prevCount + 1);
        setSeconds((prevCount) => 0);
      } else {
        setSeconds((prevCount) => prevCount + 1);
      }
    }, 1000);

    if (reStartTime) {
      clearInterval(sampleInterval);
      setMinutes((prevCount) => 0);
      setSeconds((prevCount) => 0);
    }

    if (stoptTime) {
      clearInterval(sampleInterval);
    }

    return () => {
      clearInterval(sampleInterval);
    };
  }, [reStartTime, seconds, minutes]);

  return (
    <TimerContainer>
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </TimerContainer>
  );
};
