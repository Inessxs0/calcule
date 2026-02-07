import React from 'react'
import { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";


export default function Calculator() {
    const [value, setValue] = useState("");


    const handleClick = (val) => {
        setValue((prev) => prev + val);
    };


    const calculate = () => {
        try {
            setValue(eval(value).toString());
        } catch {
            setValue("Erreur");
        }
    };

    const clear = () => setValue("");


    return (
        <div style={{ width: "250px", margin: "50px auto" }} className='calcule'>
        <Display value={value} />
        <Buttons
        onClick={handleClick}
        onEqual={calculate}
        onClear={clear}
        />
        </div>
    );
}


