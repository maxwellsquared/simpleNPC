import { useState, useContext } from 'react';
import { CharContext } from './CharContext';

export function Secrets() {
    const myChar = useContext(CharContext)[0];

    return (
        <div className="secrets-container">
            <h3>Secrets and Rumours</h3>
            { myChar.secret ? <p>{myChar.name} has a secret: {myChar.secret}</p> : <p>{myChar.name} doesn't know anything juicy.</p>}

            { myChar.rumour ? <p>{myChar.name} knows a rumour: {myChar.rumour}</p> : <p>{myChar.name} doesn't know anything juicy.</p>}
            
        </div>
    )

}