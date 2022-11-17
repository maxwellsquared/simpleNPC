import React, { useState } from "react";

const CharContext = React.createContext([{}, () => {}]);

function CharProvider(props) {
    const [state, setState] = useState({
        name: "John Doe",
        gender: "male",
        ancestry: "Human",
        job: "Mayor",
        description: "A tall, smelly person with wooden teeth.",
        inventory: ["47 copper pieces", "a potion of CURE WOUNDS"],
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