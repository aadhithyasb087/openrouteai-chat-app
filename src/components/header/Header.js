import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import SmsIcon from "@material-ui/icons/Sms";
import PeopleIcon from "@material-ui/icons/People";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SignIn from "../auth/SignIn";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebaseConfig";


function SignOut() {
  return (
    <button className="sign-out" onClick={() => auth.signOut()}>
      Sign Out
    </button>
  );
}
function Header() {
  const [user] = useAuthState(auth);
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header-center header-inner-cont">
          <div className="header-chat header-inner-cont">
            <SmsIcon className="sms-icon" />
            <p>Chat</p>
          </div>
          <div className="header-characters header-inner-cont">
            <PeopleIcon className="people-icon" />
            <p>My Characters</p>
          </div>
          <div className="header-generate-image header-inner-cont">
            <CameraAltIcon className="camera-icon" />
            <p>Generate Image</p>
          </div>
          <div className="header-create-character header-inner-cont">
            <div className="create-character-inner header-inner-cont">
              <FavoriteIcon className="fav-icon" />
              <p>Create Character</p>
            </div>
          </div>
        </div>
        <div className="header-profile">
          <AccountCircleIcon />
          <p>My Profile</p>
          <ArrowDropDownIcon className="header-arrow-drop" />
          {!user ? <SignIn /> : <SignOut />}
        </div>
      </div>
    </div>
  );
}

export default Header;
