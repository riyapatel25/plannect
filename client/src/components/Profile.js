import React from "react";
import earth from './images/earth.png';
import profilepic from './images/profile.jpeg'; 

const Profile = () => {
    return (
        <div className= "Profile" id='Profile'>
            <img src={profilepic} alt="" className="profilepic"/>
            <div className = "intro">
            <h1 className="welcome">Welcome to your Profile!</h1>
            <h2>Joey Doe</h2>
            </div>
            <div className = "mybio">
                <h1 className="subhead">My Bio</h1>
                <img src={earth} alt="" className="earth"/>
                <p>
                Hi, I'm Joey, and I'm a huge fan of basketball, sewing, and coding. 
                Basketball has been a part of my life since I was a kid. 
                I enjoy taking some time to focus on my sewing projects, which allow me to express my creativity and attention to detail. 
                I'm also deeply interested in technology and programming.
                In fact, I'm currently working on developing a mobile app that will connect students with volunteer opportunities. 
                I'm always looking for new ways to grow and improve, both in my personal and professional life. 
                I'm naturally curious and driven, and I'm always eager to learn new things and explore new opportunities.
                With my diverse range of interests and skills, I'm excited to see where life takes me next! 
                </p>

            </div>
        </div>
    );
}

export default Profile;