import { useState, useContext } from 'react';
import { capFirstLetter, CharContext } from './CharContext';

export function Inventory() {
    const myChar = useContext(CharContext)[0];

    return (
        <div className='inventory-container'>
            <h4>Inventory</h4>
            <p>{capFirstLetter(myChar.inventory)}</p>
            {/* <ul>
                {myChar.inventory.map((elem, i) => <li key={i}>{elem}</li>)}
            </ul> */}
        </div>
    )
}