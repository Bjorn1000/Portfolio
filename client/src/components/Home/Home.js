import React from 'react';
import './Home.css';
import photo from './image1.jpeg';
import photo2 from './mystack.png';
const Home = () => {
    return (
        <div>
            <div className="centered">
                <div className="myName"><b>Osbjorn Gulbranson</b></div>
                <div className="header">Full Stack Developer</div>
                <img className="photo" src={photo} alt="me"></img>
                
            </div>
            <div className="myStack">
                <img src={photo2} alt="stack"></img>
            </div>
            
        </div>
          
    );
}
export default Home;