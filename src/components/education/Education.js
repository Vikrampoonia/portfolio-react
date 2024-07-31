import React from "react";

import './Education.css';



function Education()
{
    function decideClassName(key,value)
    {
        if(value==1)
        {
            return (key%2==0)?"container  left-container":"container  right-container";
        }
        else
        {
            return (key%2==0)?"left-container-arrow":"right-container-arrow";
        }
        
    }


    const Institute=
    {
        "order":[{"degree":"B.TECH(CSE) CGPA:7.76","year":"2022(Nov)-2026(July)","name":"Indian Institute Of Information Technology Senapati,Manipur,795002"},{"degree":"XII Marks:92%","year":"2020-2021","name":"Mohta Public School Rajgarh ,Churu, Rajasthan,331023"},{"degree":"X Marks:89.80%","year":"2019-2020","name":"Mohta Public School Rajgarh ,Churu, Rajasthan,331023"}]
    }



    return(
        <>
            <section className="education">
    
                    <div    className="timeline">

                        {Object.keys(Institute["order"]).map((key)=>(
                            
                            <div    className={decideClassName(key,1)}  key={key}>
                            <img/>
                            <div    className="text-box">
                                <h2>{Institute["order"][key]["degree"]}</h2>
                                <small>{Institute["order"][key]["year"]}</small>
                                <p>{Institute["order"][key]["name"]}</p>
                                <span   className={decideClassName(key,0)}></span>
                            </div>
                        </div>

                        ))}

                    </div>

            </section >

        </>
    );
}

export default Education;



