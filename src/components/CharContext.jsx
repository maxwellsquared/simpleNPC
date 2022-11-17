import React, { useState } from "react";

import { d6 } from "./Attribute";
import { wordPicker } from '../helpers/wordPicker';
import { maleNames, femaleNames, nbNames, lastNames, desc1, species, charJob, items } from "../helpers/arrays";

const getGender = function() {
    let i = Math.random();
    if (i < 0.47) return "male";
    if (i < 0.9) return "female";
    return "nonbinary";
}


const CharContext = React.createContext([{}, () => {}]);

function CharProvider(props) {
    const [gender, setGender] = useState(getGender());
    const [state, setState] = useState({
        name: ((gender === "male" ? wordPicker(maleNames, 1) : wordPicker(femaleNames, 1)) + " " + wordPicker(lastNames, 1)),
        gender: gender,
        ancestry: wordPicker(species, 1),
        job: wordPicker(charJob, 1),
        description: ("A tall, smelly " + gender + " with wooden teeth."),
        inventory: wordPicker(items, (d6() + 2)),
        secret: null,
        rumour: "Elves kidnapped the shoemaker's baby!"
      });
    return (
        <CharContext.Provider value={[state, setState]}>
            {props.children}
        </CharContext.Provider>
    )
}

export { CharContext, CharProvider };