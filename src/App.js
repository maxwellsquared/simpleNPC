import React, { useState, useRef } from 'react';
import {faker } from '@faker-js/faker';
import './App.css';

import { StatBlock } from "./components/StatBlock";
import { Portrait } from './components/Portrait';

import { wordPicker } from './helpers/wordPicker';
import { maleNames, femaleNames, nbNames, lastNames, desc1, species, charJob } from "./helpers/arrays";

function App() {

  return (
    <div className="App">
      <header>
        <h1>simpleNPC</h1>
      </header>
      <section>
        {/* <Portrait /> */}
        <p>{wordPicker(maleNames, 1)} {wordPicker(lastNames, 1)} is a {wordPicker(desc1, 1)} {wordPicker(species, 1)} {wordPicker(charJob, 1)}.</p>
        <StatBlock />
        </section>
    </div>
  );
}

export default App;
