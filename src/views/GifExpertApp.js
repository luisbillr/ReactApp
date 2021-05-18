import React, { useState } from 'react'
import { AddCategory } from '../components/AddCategory'
import { GifGrid } from '../components/GifGrid';

export const GifExpertApp = ()=>{

    const [categories, setCategories] = useState(['Dragon Ball']);

    // const handleAdd = ()=>{
    //     const valor = document.querySelector('#txtPrueba').value;
    //     setCategories([...categories,valor]);
    // }
    // function Agregar ()
    // {
    //     document.querySelector('#txtPrueba').value = "hola";
    // }
    return (<>
    <h2>GifExpertApp</h2>
    <AddCategory setCategories={setCategories}></AddCategory>
    <hr/>
        <ol>
            {
                categories.map(category => 
                    (<GifGrid 
                    key={category}
                    category = {category}>
                    </GifGrid>)
                    )
            }
        </ol>
    </>
    );
};