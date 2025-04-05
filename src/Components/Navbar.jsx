import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import { navLinksData } from "../Constants/NavData";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`w-full xl:h-24 mdl:h-20 max-md:h-14 sticky top-0 z-50 ${
      theme === 'dark' ? 'bg-bodyColor' : 'bg-gray-100'
    } mx-auto flex justify-between items-center font-titleFont border-b-[1px] ${
      theme === 'dark' ? 'border-b-gray-600' : 'border-b-gray-300'
    }`}>
      <div>
        <img src="/prof/logonew.png" className="md:w-16 w-10 rounded-b-full"></img>
      </div>
      <div className="flex items-center gap-6">
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksData.map(({ _id, title, link }) => (
            <li
              className={`text-base font-normal ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              } tracking-wide hover:text-designColor duration-300 group cursor-pointer`}
              key={_id}
            >
              <a href={link}>{title}</a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {theme === 'dark' ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;