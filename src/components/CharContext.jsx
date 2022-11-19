import React, { useState } from "react";

import { d6 } from "./Attribute";
import { wordPicker } from '../helpers/wordPicker';
import { maleNames, femaleNames, nbNames, lastNames, desc1, desc2, desc3, species, charJob, items, locations, monsters, secrets, rumours } from "../helpers/arrays";

const getGender = function() {
    let i = Math.random();
    if (i < 0.47) return "male";
    if (i < 0.9) return "female";
    return "nonbinary";
}

export const capFirstLetter = function(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
}

const getDesc = function() {
    let i = Math.random();
    if (i < 0.3) return (capFirstLetter(wordPicker(desc1, 1)) + " and " + wordPicker(desc3, 1) + ". " + capFirstLetter(wordPicker(desc2, 1)) + ".");
    if (i < 0.7) return (capFirstLetter(wordPicker(desc1, 2)) + " yet " + wordPicker(desc3, 1) + ". " + capFirstLetter(wordPicker(desc2, 1)) + ".");
    return (capFirstLetter(wordPicker(desc2, 1)) + ". " + capFirstLetter(wordPicker(desc3, 1)) + ".");
}

const getSecret = function() {
    let i = Math.random();
    if (i < 0.3) return (wordPicker(secrets, 1));
    return null;
}

const getRumour = function() {
    let i = Math.random();
    if (i < 0.7) return (wordPicker(rumours, 1));
    return null;
}


const CharContext = React.createContext([{}, () => {}]);

function CharProvider(props) {
    const [gender, setGender] = useState(getGender());
    const [desc, setDesc] = useState(getDesc());
    const [secret, setSecret] = useState(getSecret());
    const [rumour, setRumour] = useState(getRumour());
    const [state, setState] = useState({
        name: ((gender === "male" ? wordPicker(maleNames, 1) : wordPicker(femaleNames, 1)) + " " + wordPicker(lastNames, 1)),
        gender: gender,
        ancestry: wordPicker(species, 1),
        job: wordPicker(charJob, 1),
        description: desc,
        inventory: wordPicker(items, (d6() + 2)),
        secret: secret,
        rumour: rumour
      });
    return (
        <CharContext.Provider value={[state, setState]}>
            {props.children}
        </CharContext.Provider>
    )
}

export { CharContext, CharProvider };