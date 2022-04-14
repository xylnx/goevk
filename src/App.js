import Header from "./components/Header";
import { EventList } from "./components/EventList";

import {
  //BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";

// Filters
import { FilterToday, FilterAll } from "./filters/FilterDates";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <main className="main">
          <Switch>
            <Route exact path="/">
              <EventList filter={FilterToday} />
            </Route>
            <Route exact path="/all">
              <EventList filter={FilterAll} />
            </Route>
          </Switch>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
