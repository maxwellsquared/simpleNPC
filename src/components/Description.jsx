import { useState, useContext } from 'react';
import { CharContext } from './CharContext';

export function Description() {
    const myChar = useContext(CharContext)[0];

    return (
        <div className="description-container">
            <h2>{myChar.name}</h2>
            <h3>{myChar.gender} {myChar.ancestry} {myChar.job}</h3>
            <p>{myChar.description}</p>
        </div>
    )

}