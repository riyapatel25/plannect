import React from "react";
import earth from './images/earth.png';
import profilepic from './images/profile.jpeg'; 

const Profile = () => {
    return (
        <div className= "Profile">
            <img src={profilepic} alt="" className="profilepic"/>
            <div className = "intro">
            <h1 className="welcome">Welcome to your Profile!</h1>
            <h2 className="name">John Doe</h2>
            </div>
            <div className = "mybio">
                <h1 className="subhead">My Bio</h1>
                <img src={earth} alt="" className="earth"/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Quisque gravida orci sit amet risus dictum, in auctor nunc pellentesque. Nam efficitur euismod tellus quis pharetra. 
                    Mauris molestie at lorem et imperdiet. Donec eu dui cursus, ullamcorper velit eu, placerat justo. 
                    Duis ornare sodales magna, sit amet faucibus sem efficitur vitae. Nulla facilisis ut libero dignissim tempus. 
                </p>

            </div>
        </div>
    );
}

export default Profile;