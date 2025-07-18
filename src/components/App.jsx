// Main App component that orchestrates the layout and state management
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import ErrorBoundary from "./ErrorBoundary";
import { emojiList } from "./Emoji";

function App() {
  // State for search query, filtered emojis, and loading state
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEmojis, setFilteredEmojis] = useState(emojiList);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data fetching with a 1-second delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Handle search input changes (case-insensitive)
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = emojiList.filter((emoji) =>
      emoji.emojiMeaning.toLowerCase().includes(query)
    );
    setFilteredEmojis(filtered);
  };

  // Clear the search input
  const clearSearch = () => {
    setSearchQuery("");
    setFilteredEmojis(emojiList);
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col">
      {/* Wrap components in ErrorBoundary for error handling */}
      <ErrorBoundary>
        <Header />
        {/* Sticky search bar with focus animation */}
        <div className="sticky top-0 z-10 bg-white shadow-md p-4">
          <div className="max-w-7xl mx-auto flex items-center space-x-4">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search emojis by meaning..."
              className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              aria-label="Search emojis"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
                aria-label="Clear search"
              >
                Clear
              </button>
            )}
          </div>
        </div>
        <main className="flex-grow py-8">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
              <span className="ml-4 text-gray-600">Loading...</span>
            </div>
          ) : (
            <Card emojis={filteredEmojis} />
          )}
        </main>
        <Footer githubLink="https://github.com/sanjayR-20/emoji-meanings" />
        {/* Back to top button with hover effect */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          aria-label="Back to top"
        >
          ↑
        </button>
      </ErrorBoundary>
    </div>
  );
}

App.propTypes = {
  // No props are passed to App
};

export default App;
