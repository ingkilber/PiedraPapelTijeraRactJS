import { Fragment, useEffect } from "react";

const Reset = ({ message, resetGame, updateScore }) => {
  useEffect(() => {
    if (message === "TÚ GANAS") {
      updateScore("+");
    } else if (message === "PIERDES") {
      updateScore("-");
    } else {
      updateScore("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);
  return (
    <Fragment>
      <h2>{message}</h2>
      <button onClick={resetGame}>JUEGA DE NUEVO</button>
    </Fragment>
  );
};

export default Reset;
