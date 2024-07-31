import React from 'react';
import './header.css';
import { useState } from 'react';

import Home from './Home.js';


function Item({value})
{
    

    if(value==0)
    {
        
        return <Home/>
    }
    else if(value==1)
    {
        return <section className="bodySection">Hello1</section>
    }
    else if(value==2)
    {
        return <section className="bodySection">Hello1</section>
    }
    else if(value==3)
    {
        return <section className="bodySection">Hello3</section>
    }
    else if(value==4)
    {
        return <section className="bodySection">Hello4</section>
    }
    else if(value==5)
    {
        return <section className="bodySection">Hello5</section>
    }
    else if(value==6)
    {
        return <section className="bodySection">Hello6</section>
    }
    
}



function Header()
{
    const[num,setNum]=useState(0);
    

    const element={

        "navElement":["Home","About","Skills","Exprience","Project","Resume"]
    };

    function handleSubmit(key)
    {
        setNum(key);   
    }


    return(
        <>
            
            <section>
                <div    className="navbar">
                    {Object.keys(element["navElement"]).map((key)=>(
                        <div key={key}  className="navbarElement"   onClick={()=>handleSubmit(key)}>{element["navElement"][key]}</div>
                    ))}
                </div>
            </section>

                    

            <Item    value={num}  />

           
        </>
    );
}

export default Header;





/*

merge education part in about part


*/