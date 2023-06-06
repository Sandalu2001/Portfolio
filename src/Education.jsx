import React from "react"
import Image from "./Image";


function Education(){
    return (
        <section id="education" class="white-section">
    
          <div class="container-fluid">
            <h2 className="sub-title">Education</h2>
            <div class="row">
              <div class="feature-box col-lg-4">
                <Image src="images/Rahula-College.svg" alt="rahula" className="rahula"/>
                <h3 class="feature-title">Rahula College.</h3>
                <p>G.C.E A/L - 2020</p>
                <p>G.C.E O/L - 2017</p>
              </div>

              <div class="feature-box col-lg-4">
                  <Image src="images/Westminster.jpg" alt="rahula" className="uow"/>
                  <h3 class="feature-title">University Of Westminster</h3>
                  <p>BEng(hons) Software Engineering.</p>
              </div>
        
              <div class="feature-box col-lg-4">
              <Image src="images/University_of_Sri_Jayewardenepura_crest.png" alt="rahula" className="jpura"/>
                <h3 class="feature-title">University Of Sri Jayewardenepura</h3>
                <p>BSc in Infromation Communication & Technology.</p>    
              </div>
        
              
        
            </div>

          </div>
        </section>
       
    )
}


export default Education;
