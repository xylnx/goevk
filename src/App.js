import Header from "./components/Header";
import EventList from "./components/EventList";
import {
  //BrowserRouter as Router,
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
              <EventList />
            </Route>

            {/*
            <Route exact path="/all">
              <EventsAll />
            </Route>
            */}
          </Switch>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
