import Header from './components/Header';
import { ButtonNav } from './components/ButtonNav';
import { EventList } from './components/EventList';

import {
  //BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';

import { useTheme } from './hooks/useTheme';

// Use global styles to change themes
import { GlobalStyles, GlobalStylesLight } from './styles/GlobalStyles';

// Date filters
import { FilterToday, FilterTomorrow, FilterAll } from './filters/FilterDates';

function App() {
  const { mode } = useTheme();
  return (
    <HashRouter>
      {mode === 'dark' && <GlobalStyles />}
      {mode === 'light' && <GlobalStylesLight />}
      <div className="App">
        <Header />
        <ButtonNav />
        <main className="main">
          <Switch>
            <Route
              exact
              path="/"
              render={(routeProps) => (
                <EventList filter={FilterToday} routeProps={routeProps} />
              )}
            ></Route>
            <Route
              exact
              path="/tomorrow"
              render={(routeProps) => (
                <EventList filter={FilterTomorrow} routeProps={routeProps} />
              )}
            ></Route>
            <Route
              exact
              path="/all"
              render={(routeProps) => (
                <EventList filter={FilterAll} routeProps={routeProps} />
              )}
            />
          </Switch>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
