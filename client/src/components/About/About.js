import React from 'react';
import './About.css';
const About = () => {
    return (
        <div className="row">
            <div className="col-sm-5">
                <a href="/contact">
                    <div className="card text-white bg-dark mb-3 align-items-center d-flex justify-content-center" style={{width: "18rem", height: "16rem", top: "110px", left: "450px"}}>
                            <h5 className="card-title">Contact me today!</h5>
                    </div>
                </a>
                <a href="/apps">
                    <div className="card text-white bg-dark mb-3 align-items-center d-flex justify-content-center" style={{width: "18rem", height: "16rem", top: "170px", left: "350px"}}>
                            <h5 className="card-title" style={{fontSize: "15px", margin: "30px"}}>Check out some of the things I have built!</h5>
                    </div>
                </a>
            </div>
            <div className="col-sm-6" style={{top: "100px"}}>
                <div class="card bg-light mb-3" style={{width: "30rem", left: "250px"}}>
                    <div class="card-header">About</div>
                    <div class="card-body">
                        <p class="card-text" style={{fontSize: '25px'}}>Hello, I am a full stack web developer with 2 years of exeperience creating websites, apps, automation scripts, and other projects. I graduated from douglas college's computer
                        studies and information systems program in 2018 and have been busy ever since. The bulk of my experience is working for startups and doing my own freelance projects.
                        If you have any inquiries about my services, please contact me and we can set up a call. Thank you for visiting and best of luck in your business endeavors!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;