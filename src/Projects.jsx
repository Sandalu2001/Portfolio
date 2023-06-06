import React from "react"


function Projects(){

    

    return(
        <section id="projects" className="colored-section">
            <div className="container-fluid">

            <h2 className="sub-title">Projects</h2>
                
                <div className="mobile">
                            <img src="images/clima.png" alt="clima" className="prjImg1" />
                            <img src="images/chit-chat.png" alt="chit-chat" className="prjImg2"/>
                            <img src="images/bytecoin.png" alt="bytecoin" className="prjImg3"/>
                            <img src="images/bmi.png" alt="bmi" className="prjImg4"/>
                </div>

                <div className="web">
                            <img src="images/watchflix.png" alt="watchflix" className="prjImg5"/>
                            <img src="images/blog.png" alt="blog" className="prjImg6"/>
                            <img src="images/simon.png" alt="simon" className="prjImg7"/>
                            <img src="images/keeper.png" alt="keeper" className="prjImg8"/>
                </div>
            </div>
        </section>

        

       
    )
}


export default Projects;