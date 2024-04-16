import { Link } from 'react-router-dom';

// Components
import { ModeSelector } from './ModeSelector';

// Assets
import { IconBolt } from './../assets/icon-bolt';

const Header = () => {
  return (
    <div className="logo-header">
      <Link to="/">
        <h1>
          <IconBolt />
          goeVK
        </h1>
      </Link>
      <ModeSelector cssClass="header__mode-selector" />
      <div className="header__claim">
        Dein Veranstaltungskalender für Göttingen
      </div>
    </div>
  );
};

export default Header;
