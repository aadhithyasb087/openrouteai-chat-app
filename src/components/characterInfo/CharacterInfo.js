import React from "react";
import "./CharacterInfo.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import BuildIcon from "@material-ui/icons/Build";
import PersonIcon from "@material-ui/icons/Person";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faComment } from "@fortawesome/free-solid-svg-icons";
import CloseIcon from "@material-ui/icons/Close";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import LockIcon from "@material-ui/icons/Lock";
import ShareIcon from "@material-ui/icons/Share";
import character from "../../assets/images/character.jpeg";
import { Lock } from "@material-ui/icons";
function CharacterInfo() {
  return (
    <div className="character-info">
      <header className="character-info-header">
        <ArrowBackIosIcon />
        <p>Chats</p>
        <p>
          img : <span>3</span>
        </p>
        <p className="character-info-msg">msg</p>
        <MoreVertIcon />
        <BuildIcon />
        <PersonIcon />
        <FontAwesomeIcon icon={faPenToSquare} className="character-info-edit" />
        <CloseIcon />
      </header>
      <div className="character-img-cont">
        <img src={character} alt="char" />
      </div>
      <div className="character-info-details">
        <div className="character-info-details-top">
          <b>Elon Musk</b>
          <p>@elon-must-2</p>
        </div>
        <div className="character-info-details-cont">
          <div className="character-info-details-cont-one">
            <div>
              <CameraAltIcon fontSize="small" />
              <p>0</p>
            </div>
            <div className="character-info-details-cont-one-right">
              <FontAwesomeIcon icon={faComment} fontSize="small" />
              <p>0</p>
            </div>
            <div>
              <LockIcon fontSize="small" />
              <p>Make Character Public</p>
              <ShareIcon fontSize="small" />
            </div>
          </div>
          <div className="character-info-details-cont-two">
            <div className="character-info-details-cont-two-left">
              <b>Who I Am</b>
              <div>
                <h5>Personality</h5>
                <p>Buisnessman</p>
              </div>
              <div>
                <h5>Work</h5>
                <p>CEO</p>
              </div>
              <div>
                <h5>Hobbies</h5>
                <p>Space Research</p>
              </div>
              <div>
                <h5>Relationship</h5>
                <p>Friend</p>
              </div>
            </div>
            <div className="character-info-details-cont-two-right">
              <div>
                <b>About Me</b>
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className="character-info-edit"
                />
              </div>
              <p>
                I am Elon Musk, a visionary entrepreneur known for my work in
                revolutionizing multiple industries. I co-founded PayPal, Tesla,
                SpaceX, and Neuralink, aiming to reshape transportation, energy,
                space exploration, and human-computer interfacing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterInfo;
