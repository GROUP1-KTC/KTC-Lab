import { useState, useRef } from "react";

const INITIAL_TIME = 1 * 60; // 1 phút

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return {
    m: m.toString().padStart(2, "0"),
    s: s.toString().padStart(2, "0"),
  };
}

function CountDownTimer() {
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startTimer = () => {
    if (isRunning) return;
    setIsRunning(true);
    setIsFinished(false);
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          setIsRunning(false);
          setIsFinished(true);
          // Phát âm thanh 
          if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const resetTimer = () => {
    setTimeLeft(INITIAL_TIME);
    setIsRunning(false);
    setIsFinished(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    // Dừng âm thanh nếu đang phát
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const { m, s } = formatTime(timeLeft);

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h2>
        <span role="img" aria-label="timer">
          ⏳
        </span>{" "}
        TIMER
      </h2>
      <hr style={{ width: 400, margin: "20px auto" }} />
      <div style={{ fontSize: 60, fontWeight: "bold" }}>
        {m}
        <span style={{ fontSize: 30, fontWeight: "normal" }}>m</span>{" "}
        {s}
        <span style={{ fontSize: 30, fontWeight: "normal" }}>s</span>
      </div>
      <div style={{ margin: "30px 0" }}>
        <button
          onClick={startTimer}
          disabled={isRunning || timeLeft === 0}
          style={{
            background: "#2563eb",
            color: "#fff",
            border: "none",
            padding: "10px 30px",
            fontSize: 18,
            borderRadius: 4,
            marginRight: 10,
            cursor: isRunning || timeLeft === 0 ? "not-allowed" : "pointer",
          }}
        >
          START
        </button>
        <button
          onClick={resetTimer}
          style={{
            background: "#fff",
            color: "#2563eb",
            border: "2px solid #2563eb",
            padding: "10px 30px",
            fontSize: 18,
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          RESET
        </button>
      </div>
      {isFinished && (
        <div style={{ color: "red", fontWeight: "bold", fontSize: 24 }}>
          Hết giờ!
        </div>
      )}
      {/* audio âm thanh */}
      <audio ref={audioRef} src="/alarm.mp3" />
    </div>
  );
}

export default CountDownTimer;
