// Component to display a grid of emoji cards with meanings
import React, { useState } from "react";
import PropTypes from "prop-types";
import { emojiList } from "./Emoji";

function Card({ emojis }) {
  // State to track which cards have their full description shown
  const [expandedCards, setExpandedCards] = useState({});

  // Toggle the "Read more" state for a specific card
  const toggleReadMore = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
      {emojis.length > 0 ? (
        emojis.map((emoji) => {
          const isExpanded = expandedCards[emoji.id];
          const isLong = emoji.emojiMeaning.length > 50;
          const displayText = isExpanded
            ? emoji.emojiMeaning
            : `${emoji.emojiMeaning.slice(0, 50)}${isLong ? "..." : ""}`;

          return (
            <div
              key={emoji.id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 animate-fadeIn h-64"
              role="article"
              aria-labelledby={`emoji-${emoji.id}`}
            >
              <span
                className="text-6xl mb-4"
                role="img"
                aria-label={emoji.emojiMeaning}
              >
                {emoji.emoji}
              </span>
              <p
                id={`emoji-${emoji.id}`}
                className="text-gray-700 text-base flex-grow"
              >
                {displayText}
              </p>
              {isLong && (
                <button
                  onClick={() => toggleReadMore(emoji.id)}
                  className="mt-2 text-blue-500 hover:text-blue-700 transition duration-300"
                  aria-label={isExpanded ? "Show less" : "Read more"}
                >
                  {isExpanded ? "Show less" : "Read more"}
                </button>
              )}
            </div>
          );
        })
      ) : (
        <p className="text-center text-gray-500 col-span-full">
          No results found
        </p>
      )}
    </div>
  );
}

Card.propTypes = {
  emojis: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      emoji: PropTypes.string.isRequired,
      emojiMeaning: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Card.defaultProps = {
  emojis: emojiList,
};

export default Card;
