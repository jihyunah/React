import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './page05/Main';
import ProductDetail from './page05/ProductDetail';
import './css/style05.css';
import ProductList from './page05/ProductList';

const App05 = () => {
    return (
        <BrowserRouter>
            <>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/productList'>ProductList</Link></li>
                    </ul>
                </nav>

                {/* 화면에 보이는 영역 */}
                <Routes>
                    <Route path='/' element={ <Main />} />
                    <Route path='/productList'>
                        <Route index element={ <ProductList />} /> {/* productList의 기본 화면을 얘로.*/}
                        <Route path=':productId' element={ <ProductDetail /> } />
                    </Route>
                    
                </Routes>
            </>
        </BrowserRouter>
    );
};

export default App05;