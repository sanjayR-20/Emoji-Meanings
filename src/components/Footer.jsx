// Footer component that stays at the bottom of the page
import React from "react";
import PropTypes from "prop-types";

function Footer({ githubLink }) {
  return (
    <footer className="bg-blue-600 text-white p-4 mt-auto">
      <div className="max-w-7xl mx-auto text-center">
        <p>
          © {new Date().getFullYear()} Emojiii. All rights reserved.{" "}
          <a
            href={githubLink}
            className="underline hover:text-gray-200 transition duration-300"
            aria-label="GitHub repository"
          >
            View on GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  githubLink: PropTypes.string.isRequired,
};

export default Footer;
