import Header from "./components/Header";
import { ButtonNav } from "./components/ButtonNav";
import { EventList } from "./components/EventList";

import {
  //BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";

import { GlobalStyles } from "./styles/GlobalStyles";

// Filters
import { FilterToday, FilterTomorrow, FilterAll } from "./filters/FilterDates";

function App() {
  return (
    <HashRouter>
      <GlobalStyles />
      <div className="App">
        <Header />
        <ButtonNav />
        <main className="main">
          <Switch>
            <Route exact path="/">
              <EventList filter={FilterToday} />
            </Route>
            <Route exact path="/tomorrow">
              <EventList filter={FilterTomorrow} />
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
