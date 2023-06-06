import React from "react";
import Image from "./Image";

function Contact(){
    return(
        <section id="contact">
            <div class="container-fluid">
                <Image src="images/programming.png" alt="developer" class="contact-img"/>
                <form action="mailto:sandalusankaja2001@gmail.com" method="post">
                    <h1 className="sub-title">Contact Me!</h1>
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Text" />
                        <label for="floatingInput">Name</label>
                    </div>

                    <div class="form-floating">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>

                    <div class="form-floating">
                        <textarea class="form-control" id="floatingPassword" placeholder="Message" rows="10" cols="50"/>
                        <label for="floatingPassword">Message</label>
                    </div>

                    <button class="btn btn-lg btn-outline-light form-floating" type="submit">Send</button>
                </form>
            </div>
         </section>
        
    )
}


export default Contact;