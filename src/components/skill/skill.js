import React from "react";
import './Skill.css';

function Skill()
{
    const skill={
        "Fronted Skill":[{"skillName":"HTML5","per":"90%"},{"skillName":"CSS3","per":"85%"},{"skillName":"JS","per":"80%"},{"skillName":"ReactJS","per":"60%"}],
        "Backened Skill":[{"skillName":"NodeJS","per":"90%"},{"skillName":"Php","per":"85%"}],
        "DataBase":[{"skillName":"MySql","per":"90%"},{"skillName":"SqlLite","per":"85%"},{"skillName":"Mongodb","per":"85%"},{"skillName":"GraphQl","per":"15%"}],
    }



    return(
        <>
        
            <div    className="skill-section">
                {Object.keys(skill).map((key)=>(

                    <div   className="main-box" key={key}>
                        <h3>{key}</h3>
                        {Object.keys(skill[key]).map((key1)=>(
                            <div className="skills" key={key1}>
                                <div className="skill">
                                    <div    className="skill-name">{skill[key][key1]["skillName"]}</div>
                                    <div    className="skill-bar">
                                        <div    className="skill-per"   per={skill[key][key1]["per"]}  style={{maxWidth: "90%"}}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                ))}



            </div>

        </>
    );
}

export default Skill;


/*

    <div    className="skill-section">
                <div   className="main-box">
                    <h3>Fronted Skill</h3>
                    <div className="skills">
                        <div className="skill">
                            <div    className="skill-name">HTML</div>
                            <div    className="skill-bar">
                                <div    className="skill-per"   per={"90%"}  style={{maxWidth: "90%"}}></div>
                            </div>
                        </div>
        
                        <div className="skill">
                            <div    className="skill-name">CSS</div>
                            <div    className="skill-bar">
                                <div    className="skill-per"   per={"70%"}   style={{maxWidth: "70%"}}></div>
                            </div>
                        </div>

                        <div className="skill">
                            <div    className="skill-name">JS</div>
                            <div    className="skill-bar">
                                <div    className="skill-per"   per={"80%"}   style={{maxWidth: "80%"}}></div>
                            </div>
                        </div>

                        <div className="skill">
                            <div    className="skill-name">React JS</div>
                            <div    className="skill-bar">
                                <div    className="skill-per"   per={"90%"}   style={{maxWidth: "50%"}}></div>
                            </div>
                        </div>

                    </div>

                </div>





                <div   className="main-box">
                    <h3>Backened Skills</h3>
                    <div className="skills">
                        <div className="skill">
                            <div    className="skill-name">NodeJS</div>
                            <div    className="skill-bar">
                                <div    className="skill-per"   per={"60%"}   style={{maxWidth: "60%"}}></div>
                            </div>
                        </div>
        
                        <div className="skill">
                            <div    className="skill-name">Php</div>
                            <div    className="skill-bar">
                                <div    className="skill-per"   per={"90%"}   style={{maxWidth: "90%"}}></div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

*/