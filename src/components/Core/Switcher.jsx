import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkSide from '../hooks/useDarkSide.js';

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();

  const [darkSide, setDarkSide] = useState(colorTheme == 'light' ? true : false);

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <div>
      <div className="m-16 flex flex-col items-center">
        <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={30} />
      </div>
    </div>
  );
}
