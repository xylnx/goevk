// Custom hooks
import { useTheme } from "../hooks/useTheme";

// Components
import { IconModeLight, IconModeDark } from "../assets/icon-mode";

export const ModeSelector = ({ cssClass }) => {
  const { mode, changeMode } = useTheme();
  console.log({ mode });
  return (
    <div className={cssClass}>
      <button
        className={`${cssClass}__button`}
        onClick={() =>
          mode === "dark" ? changeMode("light") : changeMode("dark")
        }
      >
        {mode === "light" && <IconModeLight />}
        {mode === "dark" && <IconModeDark />}
      </button>
    </div>
  );
};
