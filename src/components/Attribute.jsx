import { useState } from "react";

export const d6 = function() {
    return 1 + Math.floor(Math.random() * 6);
}

const rollScore = function() {
    let dice = new Array(4).fill(0);
    for (let i = 0; i < dice.length; i++) {
        dice[i] = d6();
    }
    dice.sort();
    return dice[1] + dice[2] + dice[3];
}

const calcModifier = function(input) {
    let toReturn = Math.floor((input - 10) / 2);
    if (toReturn < 0) return toReturn;
    return "+" + toReturn;
}


export function Attribute(props) {
    const [score, setScore] = useState(rollScore());
    const [modifier, setModifier] = useState(calcModifier(score));


    return (
        <div className="attr-container">
            <div><h3>{props.attrType}</h3></div>
            <div>{score} ({modifier})</div>
        </div>
    )
}