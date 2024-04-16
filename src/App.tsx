import Header from './components/Header';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { FilterControls } from './components/FilterControls';
import { EventList } from './components/EventList';

import { logBuildDate } from './helpers/logBuildDate';

import { useTheme } from './hooks/useTheme';

import './components/AppLayout'

// Use global styles to change themes
import { GlobalStyles, GlobalStylesLight } from './styles/GlobalStyles';

// Date filters
import { FilterToday, FilterTomorrow, FilterAll } from './filters/FilterDates';

function App() {
  const { mode } = useTheme();

  logBuildDate();

  return (
    <HashRouter>
      {mode === 'dark' && <GlobalStyles />}
      {mode === 'light' && <GlobalStylesLight />}
      <app-layout>
        <header slot="header">
          <Header />
          <Nav />
        </header>
        <main slot="main" className="main">
          <Routes>
            <Route path="/" element={<EventList filter={FilterToday} />} />
            <Route
              path="/tomorrow"
              element={<EventList filter={FilterTomorrow} />}
            />
            <Route path="/all" element={<EventList filter={FilterAll} />} />
          </Routes>
        </main>
      </app-layout>
    </HashRouter>
  );
}

export default App;
