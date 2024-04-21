import { ReactElement, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

// Components
import Header from '@/components/Header';
import { Nav } from '@/components/Nav';
import { EventList } from '@/components/EventList';
import '@/components/AppDrawer';

// Functions
import { logBuildDate } from '@/helpers/logBuildDate';
import { useTheme } from '@/hooks/useTheme';

// Filters
import { FilterToday, FilterTomorrow, FilterAll } from './filters/FilterDates';
import { Filters } from '@/components/Filters';

// Style sheets
import { GlobalStyles, GlobalStylesLight } from '@/styles/GlobalStyles';

// Acquaint TS and web components
declare module 'react/jsx-runtime' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'app-drawer': AppDrawerAttributes;
    }
    interface AppDrawerAttributes {
      collapsed: boolean;
      children: HTMLElement | ReactElement;
    }
  }
}

function App() {
  const { mode }: { mode: 'light' | 'dark' } = useTheme();
  const [appDrawerIsColapsed, setAppDrawerIsCollapsed] = useState(true);

  logBuildDate();

  function toggleAppDrawer() {
    setAppDrawerIsCollapsed((prev) => !prev);
  }

  return (
    <HashRouter>
      {mode === 'dark' && <GlobalStyles />}
      {mode === 'light' && <GlobalStylesLight />}

      <header>
        <Header />
        <Nav filterBtnAction={toggleAppDrawer} />
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

        <app-drawer collapsed={appDrawerIsColapsed}>
          <div slot="default">
            <Filters />
          </div>
        </app-drawer>
      </main>
    </HashRouter>
  );
}

export default App;
