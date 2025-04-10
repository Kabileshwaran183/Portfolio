import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../context/themeContext';
import { navLinksData } from "../Constants/NavData";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <div className={`w-full transition-all duration-300 sticky top-0 z-50 ${
      scrolled ? 'xl:h-14 mdl:h-16 max-md:h-12' : 'xl:h-24 mdl:h-20 max-md:h-14'
    } ${
      theme === 'dark' ? 'bg-bodyColor-dark' : 'bg-bodyColor-light'
    } mx-auto flex justify-between items-center font-titleFont ${
      scrolled ? `border-b-[1px] ${theme === 'dark' ? 'border-b-designColor-dark/30' : 'border-b-designColor-light/30'}` 
              : `shadow-lg ${theme === 'dark' ? 'shadow-black/20' : 'shadow-gray-300'}`
    }`}>
      <div>
        <img src="/prof/logonew.png" className={`transition-all duration-300 ${scrolled? 'md:w-10 w-8' :'md:w-16 w-10'} rounded-b-full ml-5`}></img>
      </div>
      <div className="flex items-center gap-6">
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksData.map(({ _id, title, link }) => (
            <li
              className={` transition-all duration-300 ${
                scrolled ? `text-base ${
                theme === 'dark' ? 'text-fontColor-dark/60' : 'text-fontColor-light/60'
              } ` : `text-lg font-bold  ${
                theme === 'dark' ? 'text-fontColor-dark/50' : 'text-fontColor-light/50'
              }`
              }  tracking-wide hover:text-designColor dark:hover:text-designColor-dark duration-300 group cursor-pointer relative`}
              key={_id}
            >
              <a href={link}>{title}</a>
              <span className={`absolute left-0 -bottom-1 w-0 h-0.5 ${
                theme === 'dark' ? 'bg-designColor-dark' : 'bg-designColor-light'
              } transition-all duration-300 group-hover:w-full`}></span>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors mr-6"
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