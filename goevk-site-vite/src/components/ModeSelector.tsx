// Custom hooks
import { useTheme } from '../hooks/useTheme';

// Components
import { IconModeLight, IconModeDark } from '../assets/icon-mode';

type Props = { cssClass: string }

export const ModeSelector = ({ cssClass }: Props) => {
  const { mode, changeMode } = useTheme();
  return (
    <div className={cssClass}>
      <button
        className={`${cssClass}__button`}
        onClick={() =>
          mode === 'dark' ? changeMode('light') : changeMode('dark')
        }
      >
        {mode === 'dark' && <span>light mode</span>}
        {mode === 'light' && <span>dark mode</span>}
        {mode === 'dark' && <IconModeLight />}
        {mode === 'light' && <IconModeDark />}
      </button>
    </div>
  );
};
