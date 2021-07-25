import { Route, Switch } from "react-router-dom";

//components
import Menu from "./Components/Menu";

//pages
import HomePage from "./Sites/HomePage";
import Painting from "./Sites/Painting";
import Portfolio from "./Sites/Portfolio";
import BackgroundParticles from "./Components/Particles";
import Coating from "./Sites/Coating";

//styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <BackgroundParticles className="particles-bckground" />
        <Menu />
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />

          <Route path="/Painting" render={() => <Painting />} />

          <Route path="/Portfolio" render={() => <Portfolio />} />

          <Route path="/Coating" render={() => <Coating />} />
        </Switch>
    </div>
  );
}

export default App;
