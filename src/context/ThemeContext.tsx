import { ReactNode, createContext, useReducer, useEffect } from 'react';

type ThemeContextTypes = {
  mode: GMode;
  changeMode: (mode: GMode) => void;
};

export const ThemeContext = createContext<ThemeContextTypes>({
  mode: 'light',
  changeMode: () => {},
});

type GMode = 'light' | 'dark';
type GMsg = { type: 'CHANGE_MODE'; payload: 'light' | 'dark' };

function themeRedudcer(state: { mode: GMode }, msg: GMsg) {
  switch (msg.type) {
    case 'CHANGE_MODE':
      localStorage.setItem('mode', msg.payload);
      return { ...state, mode: msg.payload };
    default:
      return state;
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(themeRedudcer, {
    mode: 'dark',
  });

  const changeMode = (mode: GMode) => {
    dispatch({ type: 'CHANGE_MODE', payload: mode });
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
      return changeMode(savedMode as GMode);
    }

    if (window.matchMedia('(prefers-color-scheme: light)').matches)
      changeMode('light');

    // Watch if user changes system preferences
    // mq.addEventListener("change", (evt) => setIsDark(evt.matches));
  }, []);

  return (
    <ThemeContext.Provider value={{ ...state, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
