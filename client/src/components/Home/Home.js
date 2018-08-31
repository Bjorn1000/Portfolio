import React from 'react';
import './Home.css';
import photo from './image1.jpeg';
const Home = () => {
    return (
        <div>
            <div className="centered">
                <div className="myName"><b>Osbjorn Gulbranson</b></div>
                <div className="header">Full Stack Developer</div>
                <img className="photo" src={photo}></img>

            </div>
        </div>
          
    );
}
export default Home;