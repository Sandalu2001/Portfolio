import React from "react";
import Header from "./Header";
import Image from "./Image";



function TitleSection(){
    return(
        <section id="title" className="colored-section">
        
            <div className="container-fluid">
            <Header />  
                <div className="row">
                    <div className="col-lg-6 ">
                    <h1 className="big-heading">Hi! I’m Full-stack web developer and  IOS developer.</h1>
                    <a class="btn btn-dark btn-lg download-btn" href="#footer">:)  Contact Me</a>
                    </div>
                    <div className="col-lg-6">
                    <Image src="images/developer.png" alt="iphone-mockup" className="title-image" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default TitleSection;