// Header component with navigation and social media links
import React from "react";
import PropTypes from "prop-types";

function Header() {
  return (
    <header className="sticky top-0 bg-blue-600 text-white p-4 shadow-md z-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Emojiii</h1>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <a
                href="#"
                className="hover:text-gray-200 transition duration-300"
                aria-label="More information"
              >
                More
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sanjayR-20/"
                target="blank"
                aria-label="GitHub repository"
              >
                <svg
                  className="w-6 h-6 fill-current hover:fill-gray-200 transition duration-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/sanjayr.20/"
                target="blank"
                aria-label="Instagram profile"
              >
                <svg
                  className="w-6 h-6 fill-current hover:fill-gray-200 transition duration-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5c0 2.347 1.903 4.25 4.25 4.25h8.5c2.347 0 4.25-1.903 4.25-4.25v-8.5c0-2.347-1.903-4.25-4.25-4.25h-8.5zm9.25 1.5a1 1 0 110 2 1 1 0 010-2zM12 7.25a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5z" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {
  // No props are passed to Header
};

export default Header;
