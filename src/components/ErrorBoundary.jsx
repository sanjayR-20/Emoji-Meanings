// Error boundary component to handle runtime errors gracefully
import React, { Component } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="text-center p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-red-600">
              Something went wrong
            </h2>
            <p className="text-gray-700 mt-2">
              An error occurred while rendering the app. Please try refreshing
              the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Refresh
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
