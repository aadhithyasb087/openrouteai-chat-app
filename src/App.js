import "./App.css";
import  { useEffect} from "react";
import Header from "./components/header/Header";
import CharacterInfo from "./components/characterInfo/CharacterInfo";
import ChatContainer from "./components/chat/ChatContainer";
function App()
{
  var random = 0;
  useEffect(() =>
  {
  random = Math.random().toFixed(2);
  },[])
  return (
    <div className="App">
      <Header  />
      <div className="middle-cont">
        <CharacterInfo />
        <ChatContainer randomNum={random}  />
      </div>
    </div>
  );
}

export default App;
