import React from "react";
import { useContext } from "react";
import { SocketContext } from "../SocketContext";
import "./VideoPlayer.css";

function VideoPlayer(props) {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  return (
    <div className="video-player">
      <h1>video player component</h1>
      {console.log(stream)}

      <div>{stream && <video playsInline muted ref={myVideo} autoPlay />}</div>

      <h3>user</h3>
      <div>
        {callAccepted && !callEnded && (
          <video playsInline muted ref={userVideo} autoPlay />
        )}
      </div>
    </div>
  );
}

export default VideoPlayer;
