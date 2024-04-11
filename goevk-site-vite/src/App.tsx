import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { FilterControls } from './components/FilterControls';
import { EventList } from './components/EventList';

import { logBuildDate } from './helpers/logBuildDate';

import { useTheme } from './hooks/useTheme';

// Use global styles to change themes
import { GlobalStyles, GlobalStylesLight } from './styles/GlobalStyles';

// Date filters
import { FilterToday, FilterTomorrow, FilterAll } from './filters/FilterDates';

function App() {
  const { mode } = useTheme();

  logBuildDate();

  return (
    <BrowserRouter>
      {mode === 'dark' && <GlobalStyles />}
      {mode === 'light' && <GlobalStylesLight />}
      <div className="App">
        <Header />
        <Nav />
        <main className="main">
          <FilterControls />
          <Routes>
            <Route path="/" element={<EventList filter={FilterToday} />} />
            <Route
              path="/tomorrow"
              element={<EventList filter={FilterTomorrow} />}
            />
            <Route path="/all" element={<EventList filter={FilterAll} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
