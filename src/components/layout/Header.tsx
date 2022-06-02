import React, {FormEvent, useContext, useState} from "react";
import './Header.css';
import {Btn} from "../common/Btn";
import {SearchContext} from "../../contexts/search.context";

export const Header = () => {

    const {search, setSearch} = useContext(SearchContext);
    const [inputVal,setInputVal] = useState(search);

    const setSearchFromLocalState = (e:FormEvent) => {
        e.preventDefault();
        setSearch(inputVal);
    };

    return (
        <header>
            <h1>Mega Ogłoesznia</h1>
            <Btn to="/add" text="Dodaj ogłoszenie"></Btn>
            <form className="search" onSubmit={setSearchFromLocalState}>
                <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
                <Btn text="Szukaj"></Btn>
            </form>
        </header>
    )
}