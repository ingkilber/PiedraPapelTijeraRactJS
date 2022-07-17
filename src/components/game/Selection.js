const Selection = ({ setSelection, calcCpuOption }) => {
  const handleClick = (e) => {
    if (e.target.classList[1].includes("paper")) {
      setSelection("paper");
    } else if (e.target.classList[1].includes("scissors")) {
      setSelection("scissors");
    } else {
      setSelection("rock");
    }
    calcCpuOption();
  };
  return (
    <div className="container">
      <div className="row1">
        <div className="option paper" onClick={handleClick}></div>
        <div className="option scissors" onClick={handleClick}></div>
      </div>
      <div className="row2">
        <div className="option rock" onClick={handleClick}></div>
      </div>
    </div>
  );
};

export default Selection;
