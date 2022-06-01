import React from "react";
import './Header.css';
import {Btn} from "../common/Btn";

export const Header = () => {
    return (


        <header>
            <h1>Mega Ogłoesznia</h1>
            <Btn text="Dodaj ogłoszenie"></Btn>
            <div className="search">
                <input type="text"/>
                <Btn text="Szukaj"></Btn>
            </div>
        </header>
    )
}