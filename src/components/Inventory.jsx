import { useState, useContext } from 'react';
import { CharContext } from './CharContext';

export function Inventory() {
    const myChar = useContext(CharContext)[0];

    return (
        <div className='inventory-container'>
            <h3>Inventory</h3>
            <p>{myChar.inventory}</p>
            {/* <ul>
                {myChar.inventory.map((elem, i) => <li key={i}>{elem}</li>)}
            </ul> */}
        </div>
    )
}