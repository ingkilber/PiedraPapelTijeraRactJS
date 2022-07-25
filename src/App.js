import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import GameBonus from "./pages/GameBonus";
import "./styles/app.css";

//Crear rutas
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/game"} component={Game} />
        <Route exact path={"/game-bonus"} component={GameBonus} />
      </Switch>
    </Router>
  );
}

export default App;
