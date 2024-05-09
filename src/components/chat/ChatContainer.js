import React, { useState, useEffect, useRef } from "react";
import "./ChatContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faToggleOff } from "@fortawesome/free-solid-svg-icons";
import recieverImg from "../../assets/images/character.jpeg";
import userImg from "../../assets/images/user_image.jpeg";
import main from "../openai/openrouterAi";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore } from "../firebase/firebaseConfig";
import firebase from "firebase/compat/app";
import { RotatingLines } from "react-loader-spinner";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebaseConfig";
function ChatContainer({ randomNum }) {
  const [content, setContent] = useState("");
  const [userContent, setUserContent] = useState("");
  const [aiContent, setAiContent] = useState("");
  const [user] = useAuthState(auth);

  var messagesRef = "";
  if (user) {
    messagesRef = firestore
      .collection("messages")
      .doc(user.uid)
      .collection("msg");
  } else {
    messagesRef = firestore
      .collection("messages")
      .doc(`common${randomNum}`)
      .collection("msg");
  }

  const query = messagesRef.orderBy("createdAt").limit(25);
  const [loading, setLoading] = useState(false);
  const [messages] = useCollectionData(query, { idField: "id" });
  const listRef = useRef(null);

  useEffect(() => {
    async function tempFunction() {
      if (userContent && aiContent) {
        await messagesRef.add({
          userMessage: userContent,
          aiMessage: aiContent,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          id: messages.length + 1,
        });
        setContent("");
        setUserContent("");
        setAiContent("");
        setLoading(false);
      }
    }
    listRef.current?.lastElementChild?.scrollIntoView();
    tempFunction();
  }, [aiContent]);

  async function fetchAiData() {
    const tempData = await main(userContent);
    return tempData.content;
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    if (content) {
      setLoading(true);
      setUserContent(content);
      setAiContent(await fetchAiData());
    } else {
      alert("Please enter valid content");
    }
  };

  if (loading) {
    return (
      <div className="loading_rotatinglines_outer">
        <div className="loading_rotatinglines">
          <p>Getting data from OpenAi....</p>
          <div>
            <RotatingLines
              visible={true}
              height="96"
              width="90"
              color="grey"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-container">
      <div className="chat-container-msg">
        {messages &&
          messages.map((msg) => (
            <div key={msg.id} ref={listRef}>
              <div className="chat-cont-send chat-cont-msg-inner">
                <div>
                  <p>Aadhi</p>
                  <span>
                    <img src={userImg} alt="img" />
                  </span>
                </div>
                <div className="chat-cont-send-msg chat-cont-msg">
                  {msg.userMessage}
                </div>
              </div>
              <div className="chat-cont-receive chat-cont-msg-inner">
                <div>
                  <span>
                    <img src={recieverImg} alt="img" />
                  </span>
                  <p>Elon</p>
                </div>
                <div className="chat-cont-receive-msg chat-cont-msg">
                  {msg.aiMessage}
                </div>
              </div>
            </div>
          ))}
      </div>

      <form className="chat-container-input" onSubmit={submitHandler}>
        <div className="chat-container-input-div">
          <div>
            <p>text</p>
            <span>
              <FontAwesomeIcon
                icon={faToggleOff}
                style={{ color: "#cf275a", fontSize: "19px" }}
              />
            </span>
          </div>

          <input
            type="text"
            placeholder="Type your message here.."
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>
        <button className="chat-container-send" type="submit">
          <FontAwesomeIcon
            icon={faTelegram}
            style={{ fontSize: "35px", color: "grey" }}
            className="chat-container-send-icon"
          />
        </button>
      </form>
    </div>
  );
}

export default ChatContainer;
