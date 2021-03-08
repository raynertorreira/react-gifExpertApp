import React, {useState} from 'react'; 
import { PropTypes } from 'prop-types';

export const AddCategory = ( { setCat } ) => {

    const [inputValue, setInputValue] = useState( '' );
  
    const handdleInputValue = (e) => {

        setInputValue(e.target.value);

    };

    const handdleSubmit = (e) => {
        
        e.preventDefault();
        //console.log('Submit hecho')
        if (inputValue.trim().length > 3) {

            setCat( cats => [inputValue, ...cats] );
            setInputValue('');

        };

    };

    return (
        <form onSubmit= { handdleSubmit } >
            <h1> { inputValue } </h1>
            <h2>AddCategory</h2>

            <input 
                type="text"
                value= { inputValue }
                onChange= { handdleInputValue }
            />
        </form>
    );
    
};

AddCategory.propTypes = {
    setCat: PropTypes.func.isRequired
};