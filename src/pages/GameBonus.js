import { useState } from "react";
import HeaderHome from "../components/home/headerHome";
import Header from "../components/game-bonus/Header";
import Main from "../components/game-bonus/Main";
import Footer from "../components/game-bonus/Footer";

const GameBonus = () => {
  const [score, setScore] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [point, setPoint] = useState(1);

  if (score < 0) {
    setScore(0);
  }

  const updateScore = (e) => {
    if (e === "+") {
      setScore(score + point);
    } else if (e === "-") {
      setScore(score - point);
    } else {
      setScore(score);
    }
  };

  return (
    <div className="game-container">
      <HeaderHome />
      <Header score={score} />
      <Main updateScore={updateScore} />
      <Footer />
    </div>
  );
};

export default GameBonus;
