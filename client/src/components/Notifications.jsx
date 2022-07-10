import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";
import "./Notifications.css";

function Notifications() {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div className="notification">
          <h1>
            <span className="caller-name">{call.name}</span> is calling:{" "}
          </h1>
          <button className="options-btn" onClick={answerCall}>
            Answer
          </button>
        </div>
      )}
    </>
  );
}

export default Notifications;
