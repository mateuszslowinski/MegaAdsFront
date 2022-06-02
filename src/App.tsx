import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import {AdForm} from './components/AdForm/AdForm';
import {Header} from "./components/layout/Header";
import {Map} from "./components/Map/Map";
import {SearchContext} from "./contexts/search.context";

export const App = () => {
    const [search, setSearch] = useState('');


    return (
        <>

            <SearchContext.Provider value={{search, setSearch}}>
                <Header/>
                <Routes>
                    <Route path="/" element={<Map/>}/>
                    <Route path="/add" element={<AdForm/>}/>
                </Routes>
            </SearchContext.Provider>
        </>
    );
}


