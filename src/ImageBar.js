import React from 'react';
import nana from './nana.jpeg'
import './ImageBar.css'

function ImageBar() {
  return (
    <img src={nana} className="image" alt="nana" />
  );
}

export default ImageBar;