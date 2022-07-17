const Selection = ({ setSelection, calcCpuOption }) => {
  const handleClick = (e) => {
    if (e.target.classList[1].includes("paper")) {
      setSelection("paper");
    } else if (e.target.classList[1].includes("scissors")) {
      setSelection("scissors");
    } else if (e.target.classList[1].includes("rock")) {
      setSelection("rock");
    } else if (e.target.classList[1].includes("lizard")) {
      setSelection("lizard");
    } else if (e.target.classList[1].includes("spock")) {
      setSelection("spock");
    }
    calcCpuOption();
  };
  return (
    <div className="container bonus">
      <div className="row1">
        <div className="option scissors" onClick={handleClick}></div>
      </div>
      <div className="row1 medium">
        <div className="option spock" onClick={handleClick}></div>
        <div className="option paper" onClick={handleClick}></div>
      </div>
      <div className="row2">
        <div className="option lizard rock" onClick={handleClick}></div>
        <div className="option rock" onClick={handleClick}></div>
      </div>
    </div>
  );
};

export default Selection;
