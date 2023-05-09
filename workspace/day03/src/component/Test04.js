import Reac, {useState} from 'react';
import Animal from './Animal.js';
import Display from './Display.js';

const Test04 = () => {
    const [name, setName] = useState('호랑이')

    const onInputName = (e) => {
        const {value} = e.target;
        setName(value);
    }
    return (
        <div>
            <Animal name={ name } onInputName={ onInputName }/>
            <hr/>
            <Display name={ name } />
        </div>
    );
};

export default Test04;