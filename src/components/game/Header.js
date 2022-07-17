const Header = ({ score }) => {
  return (
    <header>
      <div className="container">
        <div className="img-container">
          <div />
        </div>
        <div className="score-container">
          <p>Puntaje</p>
          <h3>{score}</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
