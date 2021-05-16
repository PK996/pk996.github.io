import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

//components
import Menu from "./Components/Menu";

//pages
import HomePage from "./Sites/HomePage";
import Page from "./Sites/Price";
import Portfolio from "./Sites/Portfolio";
import Contact from "./Sites/Contact";
import Test1 from "./Sites/Test1";
import BackgroundParticles from "./Components/Particles";

//styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <BackgroundParticles className="particles-bckground" />
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />

          <Route path="/Price" render={() => <Page />} />

          <Route path="/Portfolio" render={() => <Portfolio />} />

          <Route path="/Contact" render={() => <Contact />} />

          <Route path="/Test1" render={() => <Test1 />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
