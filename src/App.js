// import './App.css';
import EventsAll from "./EventsAll";
import Today from "./Today";
import Header from "./Header";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <main className="main">
          <Switch>
            <Route exact path="/">
              <Today />
            </Route>
            <Route exact path="/all">
              <EventsAll />
            </Route>
          </Switch>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
