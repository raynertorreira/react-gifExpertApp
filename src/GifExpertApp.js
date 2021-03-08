import React, {useState} from 'react'; 
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [cat, setCat] = useState(['Naruto']);

    return (

        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCat= {setCat} />
            <hr/>

            <ol>
                {
                    cat.map( (category) => (                         
                        <GifGrid
                            key= { category }
                            category= { category }
                        />
                    ))
                }    
            </ol>       
        </>

    );


};

export default GifExpertApp;