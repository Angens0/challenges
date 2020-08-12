// https://www.codewars.com/kata/5a95947f4a6b342636000173
import React from "react";

export const EggList = ({ eggs }) => {
    return (
        <ul>
            {eggs.map((name, i) => (
                <EasterEgg key={i} name={name} />
            ))}
        </ul>
    );
};

export const EasterEgg = ({ name }) => <li>{name}</li>;
