import React from 'react';

import Slider from './components/Slider.js';
import Lineup from './components/Lineup.js';

import clouds_1 from './clouds/clouds_1.jpg';
import clouds_2 from './clouds/clouds_2.jpg';
import clouds_3 from './clouds/clouds_3.jpg';
import clouds_4 from './clouds/clouds_4.jpg';
import clouds_5 from './clouds/clouds_5.jpg';

import './App.css';


const IMAGES = [clouds_1, clouds_2, clouds_3, clouds_4, clouds_5];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Lineup images={IMAGES} />
        <Slider images={IMAGES} />
      </header>
    </div>
  );
}

export default App;
