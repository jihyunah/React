import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './page02/About';
import Ceo from './page02/Ceo';
import Home from './page02/Home';
import NotFiles from './page02/NotFiles';
import Sub01 from './page02/Sub01';
import NavBar from './page02/NavBar';

const App02 = () => {
    return (
        <BrowserRouter>
            <>
                <NavBar />

                {/* 화면에 보이는 영역 */}
                <Routes>
                    <Route path='/' element={ <Home /> }/>
                    <Route path='/about' element={ <About /> }/>
                    <Route path='/ceo' element={ <Ceo />} />
                    <Route path='/sub01' element={ <Sub01 /> }/>
                    <Route path='*' element={ <NotFiles /> } />
                </Routes>
            </>
        </BrowserRouter>
    );
};

export default App02;