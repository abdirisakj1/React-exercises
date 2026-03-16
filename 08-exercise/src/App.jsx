import { useEffect, useState } from "react";

const App = () => {

  const [time, setTime] = useState(30);
  const [isRuning, setIsRuning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const handleStart = () => {
    if (timeLeft > 0) {
      setIsRuning(true);
    }
  };

  const handleStop = () => {
    setIsRuning(false);
  };

  const handleReset = () => {
    setIsRuning(false);
    setTime(30);
    setTimeLeft(30);
  };

  useEffect(() => {
    let Timer;

    if (isRuning && timeLeft > 0) {
      Timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(Timer);

  }, [isRuning, timeLeft]);

  return (
    <>
      <h1>CountDown Timer</h1>

      <div>
        <label>Set Time (seconds): </label>

        <input 
          type="number"
          value={time}
          min={0}
          onChange={(e) => {
            setTime(Number(e.target.value));
            setTimeLeft(Number(e.target.value));
          }}
        />

        <p>Time Left {timeLeft} Seconds</p>

        <button disabled={isRuning} onClick={handleStart}>Start</button>
        <button disabled={!isRuning} onClick={handleStop}>Stop</button>
        <button disabled={time === 0} onClick={handleReset}>Reset</button>

      </div>
    </>
  );
};

export default App;