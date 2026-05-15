import React, { useState, useEffect } from "react";
import { Navbar } from "flowbite-react";
import { DarkThemeToggle } from "flowbite-react";

const Nav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Check system theme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Function to handle theme changes
    const handleThemeChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        // System prefers dark mode
        document.documentElement.classList.add('dark');
      } else {
        // System prefers light mode
        document.documentElement.classList.remove('dark');
      }
    };

    // Initial check
    handleThemeChange(mediaQuery);

    // Listen for system theme changes
    mediaQuery.addEventListener('change', handleThemeChange);

    // Scroll handler
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar 
    className={`fixed w-full transition-all duration-300 ${
      isScrolled 
        ? 'z-50 bg-white py-1 shadow-lg dark:bg-black md:bg-white md:dark:bg-black' 
        : 'z-50 bg-white py-4 dark:bg-black md:bg-transparent md:dark:bg-transparent'
    }`}
      fluid
    >
      <Navbar.Brand href="/">
        <span className={`self-center whitespace-nowrap font-bold transition-all duration-300 dark:text-white ${
          isScrolled ? 'text-lg' : 'text-2xl'
        }`}>
          Pranav Chauhan
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <DarkThemeToggle />
        <a
        href="https://github.com/Pranav04027"
        target="_blank"
        rel="noopener noreferrer"
        className={`mx-3 flex hidden items-center gap-2 bg-gray-800 px-4 py-2 transition-all duration-300 hover:bg-gray-900 md:flex rounded-lg ${
          isScrolled ? 'scale-90' : 'scale-100'
        }`}
      >
        <svg 
          className="size-6 text-gray-100" 
          aria-hidden="true" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            fillRule="evenodd" 
            d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" 
            clipRule="evenodd"
          />
        </svg>
        <span className="font-medium text-white">GitHub</span>
      </a>
        <a
          href="#"
          className={`z-10 mx-3 bg-green-700 flex items-center justify-center text-center font-bold text-white transition-all duration-300 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 md:mr-0 rounded-lg ${
            isScrolled ? 'px-4 py-2 text-sm' : 'text-md px-5 py-2.5'
          }`}
        >
          Resume
        </a>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
