import React from 'react';
import nana from './nana.jpeg'
import './ImageBar.css'

function ImageBar() {
  return (
    <img src={nana} className="Image" alt="nana" />
  );
}

export default ImageBar;