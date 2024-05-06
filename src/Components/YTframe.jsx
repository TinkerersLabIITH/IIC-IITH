import React from 'react';

const YTframe = ({ videoId }) => {
  const containerStyle = {
    position: 'relative',
    width: '70%', /* Adjust width as needed */
    margin: '0 auto', /* Center the frame */
    paddingTop: '39.375%', /* 16:9 aspect ratio */
    overflow: 'hidden',
  };

  const iframeStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  };

  return (
    <div style={containerStyle}>
      <iframe
        title="YouTube video player"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={iframeStyle}
      ></iframe>
    </div>
  );
};

export default YTframe;