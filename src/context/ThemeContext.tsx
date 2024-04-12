import { ReactNode, createContext, useReducer } from 'react';

type ThemeContextTypes = { 
  mode: GMode,
  changeMode: (mode: GMode) => void 
}

export const ThemeContext = createContext<ThemeContextTypes>({mode: 'light', changeMode: () => {}});

type GMode = 'light' | 'dark';
type GMsg = { type: "CHANGE_MODE", payload: "light" | "dark" }

function themeRedudcer(state: { mode: GMode }, msg: GMsg ) {
  switch (msg.type) {
    case 'CHANGE_MODE':
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

  return (
    <ThemeContext.Provider value={{ ...state, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
