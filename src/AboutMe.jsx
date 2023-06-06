import React from "react";
import Image from "./Image";


function AboutMe(){
    return (
        
        <section id="aboutMe" class="white-section">
            <div className="container-fluid">
                <div className="myPhoto">
                        <Image src="images/Vector 1.png" alt="vector1" className="vector1"/>
                        <Image src="images/sandalu.png" alt="sandalu" className="sandalu"/>
                        <Image src="images/Vector 2.png" alt="vector1" className="vector2"/>
                </div>

                <div className="intro">
                    <h2>Hello I'm Sandalu</h2>

                    <p>Hi! I am Sandalu De Silva, a IOS developer/ web developer focused on crafting great ios and web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2020. I enjoy creating beautifully designed, intuitive and functional websites and IOS applications.</p>
                
                </div>
                </div>
        </section>
 
    )
}

export default AboutMe;