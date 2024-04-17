import { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
// import { FilterControls } from './components/FilterControls';
import { EventList } from './components/EventList';

import { logBuildDate } from './helpers/logBuildDate';

import { useTheme } from './hooks/useTheme';

import './components/AppLayout';
import './components/AppDrawer';

import { AppLayout } from './components/AppLayout';

// Use global styles to change themes
import { GlobalStyles, GlobalStylesLight } from './styles/GlobalStyles';

// Date filters
import { FilterToday, FilterTomorrow, FilterAll } from './filters/FilterDates';

function App() {
  const { mode } = useTheme();
  const [appDrawerIsColapsed, setAppDrawerIsCollapsed] = useState(false);
  const appLayoutRef = useRef(null);

  logBuildDate();

  function toggleAppDrawer() {
    setAppDrawerIsCollapsed((prev) => !prev)
  }

  /*
  useEffect(() => {
    (appLayoutRef.current as AppLayout).addEventListener(
      'app-layout-click-btn-3', toggleAppDrawer);
  }, [])
   */

  return (
    <HashRouter>
      {mode === 'dark' && <GlobalStyles />}
      {mode === 'light' && <GlobalStylesLight />}
        <header slot="header">
          <Header />
          <Nav filterBtnAction={toggleAppDrawer}/>
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
          <app-drawer collapsed={appDrawerIsColapsed}></app-drawer>
        </main>
    </HashRouter>
  );
}

export default App;
