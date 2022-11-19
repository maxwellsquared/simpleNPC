import React, { useState, useRef, createContext, useContext } from 'react';
import {faker } from '@faker-js/faker';
import './App.css';

import { StatBlock } from "./components/StatBlock";
import { CharProvider } from './components/CharContext';
import { Description } from './components/Description';
import { Inventory } from './components/Inventory';
import { Secrets } from './components/Secrets';

// const CharContext = createContext();

function App() {

  const newNPC = function() {
    window.location.reload();
  }

  return (
    <div className="App">
      <CharProvider>
        <header>
          <h1>SimpleNPC</h1>
        </header>
        <section>
          <Description />
          {/* <p>{wordPicker(maleNames, 1)} {wordPicker(lastNames, 1)} is a {wordPicker(desc1, 1)} {wordPicker(species, 1)} {wordPicker(charJob, 1)}.</p> */}
          <StatBlock />
        </section>
        <section>
          <div className='bottom'>
            <Inventory />
          </div>
          <div>
          <Secrets />
          </div>
        </section>
        <button onClick={newNPC
}>gimme a different one!</button>
      </CharProvider>
      <footer>done by <a href="https://www.maxkuhn.ca">max</a>. not affiliated with any third party. all stuff is property of the people who own the stuff. don't sue me; i don't have any money. </footer>

    </div>
  );
}

export default App;
