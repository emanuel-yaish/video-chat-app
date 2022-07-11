import React from "react";
import { useContext } from "react";
import { SocketContext } from "../SocketContext";
import "./VideoPlayer.css";

function VideoPlayer(props) {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  return (
    <div className="video-player">
      <div className="video-container">
        <h4 className="video-player-name">{name}</h4>
        <video playsInline muted ref={myVideo} autoPlay />
      </div>

      {!callAccepted && !callEnded && (
        <div className="video-container">
          <h4 className="video-player-name">{call.name}</h4>
          <video playsInline ref={userVideo} autoPlay />
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
