import "./App.css";
import { useEffect } from "react";
import Header from "./components/header/Header";
import CharacterInfo from "./components/characterInfo/CharacterInfo";
import ChatContainer from "./components/chat/ChatContainer";
import React, { useState } from "react";

function App() {
  const [random,setRandom]=useState(0)
  useEffect(() =>
  {
    if (!sessionStorage.getItem("randomNum"))
    {
    setRandom(Math.random().toFixed(2));
    sessionStorage.setItem("randomNum", random);
    }
    
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="middle-cont">
        <CharacterInfo />

        <ChatContainer randomNum={random} />
      </div>
    </div>
  );
}

export default App;
