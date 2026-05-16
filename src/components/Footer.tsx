import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 bg-white py-6 dark:border-gray-800 dark:bg-black">
      <div className="mx-auto max-w-screen-xl px-4 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Built by <a href="https://github.com/Pranav04027" target="_blank" rel="noopener noreferrer" className="font-medium text-green-600 hover:underline dark:text-green-400">Pranav Chauhan</a> &middot; 2026 &middot; <a href="https://github.com/Pranav04027" target="_blank" rel="noopener noreferrer" className="font-medium text-green-600 hover:underline dark:text-green-400">github.com/Pranav04027</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
