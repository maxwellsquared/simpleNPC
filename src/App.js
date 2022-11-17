import React, { useState, useRef, createContext, useContext } from 'react';
import {faker } from '@faker-js/faker';
import './App.css';

import { StatBlock } from "./components/StatBlock";
import { CharProvider } from './components/CharContext';
import { Description } from './components/Description';
import { Inventory } from './components/Inventory';
import { Secrets } from './components/Secrets';

import { wordPicker } from './helpers/wordPicker';
import { maleNames, femaleNames, nbNames, lastNames, desc1, species, charJob } from "./helpers/arrays";

// const CharContext = createContext();

function App() {

  const newNPC = function() {
    window.location.reload();
  }

  return (
    <div className="App">
      <CharProvider>
        <header>
          <h1>simpleNPC</h1>
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
}>this npc sucks gimme a new one</button>
      </CharProvider>

    </div>
  );
}

export default App;
