import { useState } from "react";

import Logo from "./components/Logo";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";
import ProfilePic from "./components/ProfilePic";
import Bio from "./components/Bio";
import "./App.css";
import Navigation from "./components/Navigation";

function App(){
  const [isUserFollowing, setIsUserFollowing] = useState(false);
  const buttonText = isUserFollowing ? 'Following' : 'Follow';
  const followCount = isUserFollowing ? 501 : 500;
  const handleClick = () => setIsUserFollowing(!isUserFollowing);

  return (<>

    <div className="sideline">
      <Logo/>
      <Sidebar/>
    </div>

    <div className="profile">
      <ProfilePic/>

      <div className="intro">
        <Bio followCount={followCount}/>
      </div>

      <div className="button-position">
        <button className="button" 
        style= {{background: isUserFollowing ? "grey" : "white"}} 
        onClick={handleClick}>{buttonText}</button>
      </div>

      <div className="posts">
        <div className="individual-post">
          <Post picture={"../../Cropped_Image (5).png"} likes={ 102} comments={ 24}/>
        </div>
        <div className="individual-post">
          <Post picture={"../../Cropped_Image (7).png"} likes={ 135} comments={ 29}/>
        </div>
        <div className="individual-post">
          <Post picture={"../../Cropped_Image.png"} likes={ 115} comments={ 19}/>
        </div>
      </div>

      <Navigation/>

    </div>
    </>
  );
}

export default App;
