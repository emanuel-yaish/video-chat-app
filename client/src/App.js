import React from "react";
import Notifications from "./components/Notifications";
import Options from "./components/Options";
import VideoPlayer from "./components/VideoPlayer";
import "./App.css";

function App(props) {
  return (
    <div className="video-chat-app">
      <h1 className="video-chat-app-title">Video Chat App</h1>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
}

export default App;
