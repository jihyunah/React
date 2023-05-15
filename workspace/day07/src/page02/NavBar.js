import React from 'react';
import { Link } from 'react-router-dom';
import data from './NavData.js';
import '../css/style02.css';
import { useState } from 'react';

const NavBar = () => {
    const [isNav, setIsNav] = useState(false);

    const onToggle = () => {
        setIsNav(!isNav);
    }

    return (
        <div className='navbar'>
            <p className='all-menu' onClick={ onToggle }>menu</p>
            <nav className={ isNav ? 'on' : ''}> {/* isNav가 true면 on 클래스를 부여, false면 클래스 속성 부여 X */} 
                <ul>
                    {
                    data.map((item, index)=> <li key={ index }>
                        <Link to={ item.path }>{ item.title }</Link>
                    </li>)
                    }

                    {/*
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/ceo'>Ceo</Link></li>
                    <li><Link to='/sub01'>Sub01</Link></li>
                    */}
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;