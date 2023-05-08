import React from 'react';
import CatItem from './CatItem.js';

const CatList = ({data}) => {
    return (
        <div>
            <ul className='list2'>
                {
                    data.map(item => <CatItem item={ item } />)
                }
            </ul>
        </div>
    );
};

export default CatList;