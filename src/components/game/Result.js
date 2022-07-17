import { useState, useEffect } from "react";
import Reset from "./Reset";

const Result = ({ selection, setSelection, cpu, cpuOption, updateScore }) => {
  const [message, setMessage] = useState("");
  const [reset, setReset] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setResult = () => {
    if (selection === "paper" && cpu === "rock") {
      setMessage("TÚ GANAS");
    } else if (selection === "rock" && cpu === "scissors") {
      setMessage("TÚ GANAS");
    } else if (selection === "scissors" && cpu === "paper") {
      setMessage("TÚ GANAS");
    } else if (selection === "paper" && cpu === "scissors") {
      setMessage("PIERDES");
    } else if (selection === "scissors" && cpu === "rock") {
      setMessage("PIERDES");
    } else if (selection === "rock" && cpu === "paper") {
      setMessage("PIERDES");
    } else {
      setMessage("EMPATE");
    }
  };

  const resetGame = () => {
    setSelection("");
    cpuOption("");
  };

  useEffect(() => {
    setResult();
    setTimeout(() => {
      setReset(true);
    }, 3500);
  }, [selection, cpu, setResult]);

  return (
    <div className="container container-result">
      <div className="row1 row2 row1-result">
        <div className={`option ${selection}`} style={{ margin: "0" }} />
        <div className={`option ${cpu}`} style={{ margin: "0" }} />
      </div>
      <div className="row-p">
        <p>Tú elegiste</p>
        <p>la casa escogió</p>
      </div>
      <div className="row2 row2-result">
        {reset ? (
          <Reset
            message={message}
            resetGame={resetGame}
            updateScore={updateScore}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Result;
