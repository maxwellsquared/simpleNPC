import { useState, useContext } from 'react';
import { Attribute } from './Attribute';

export function StatBlock() {
    return (

        <div className='statblock'>
            <Attribute attrType="STR" />
            <Attribute attrType="DEX" />
            <Attribute attrType="CON" />
            <Attribute attrType="INT" />
            <Attribute attrType="WIS" />
            <Attribute attrType="CHA" />
        </div>
     
    )
};