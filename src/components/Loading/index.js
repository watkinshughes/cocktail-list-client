import React from "react";

const Loading = ({ isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="loading">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  } else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  } else {
    return null;
  }
};

export default Loading;
