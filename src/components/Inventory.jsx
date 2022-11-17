import { useState, useContext } from 'react';
import { CharContext } from './CharContext';

export function Inventory() {
    const myChar = useContext(CharContext)[0];

    return (
        <div className='inventory-container'>
            <h2>Inventory</h2>
            <ul>
                {myChar.inventory.map((elem, i) => <li key={i}>{elem}</li>)}
            </ul>
        </div>
    )
}