import Header from './components/Header';
import { Nav } from './components/Nav';
import { FilterControls } from './components/FilterControls';
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
        <Nav />
        <main className="main">
          <FilterControls />
          <Switch>
            <Route exact path="/">
              <EventList filter={FilterToday} />
            </Route>
            <Route path="/tomorrow">
              <EventList filter={FilterTomorrow} />
            </Route>
            <Route path="/all">
              <EventList filter={FilterAll} />
            </Route>
          </Switch>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
