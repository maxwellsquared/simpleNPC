import { useState, useContext } from 'react';
import { CharContext } from './CharContext';

export function Secrets() {
    const myChar = useContext(CharContext)[0];

    return (
        <div className="secrets-container">
            <h4>Secrets and Rumours</h4>
            {(!myChar.secret && !myChar.rumour) ? <p>{myChar.name} doesn't know anything juicy.</p> : <></>}

            { myChar.secret ? <p className='secret-text'>{myChar.name} {myChar.secret}!</p> : <></>}

            { myChar.rumour ? <p>{myChar.name} knows a rumour: {myChar.rumour}.</p> : <></>}
            
        </div>
    )

}