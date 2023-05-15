import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App01 = () => {
    return (
        <BrowserRouter>
            <>
                <nav>

                </nav>

                {/* 화면에 보이는 영역 */}
                <Routes>
                    <Route path='/'></Route>
                    <Route path='/about'></Route>
                    <Route path='/ceo'></Route>
                    <Route path='/sub01'></Route>
                </Routes>
            </>
        </BrowserRouter>
    );
};

export default App01;