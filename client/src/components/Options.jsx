import React, { useContext } from "react";
import { useState } from "react";
import { SocketContext } from "../SocketContext";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./Options.css";

function Options({ children }) {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
  return (
    <div className="options">
      <form
        className="options-form"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="option-container-item">
          <h3 className="info-container-title">Account Info</h3>
          <div className="info-container-group">
            {
              <label
                className={`info-container-label ${
                  name ? "visible-label" : ""
                } `}
              >
                Name
              </label>
            }
            <input
              className="info-container-input"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Name"
            />
          </div>
          <CopyToClipboard text={me}>
            <button className="options-btn">📋 Copy your Id</button>
          </CopyToClipboard>
        </div>
        <div className="option-container-item">
          <h3 className="info-container-title">Make a call</h3>
          <label
            className={`info-container-label ${
              idToCall ? "visible-label" : ""
            } `}
          >
            ID to Call
          </label>
          <input
            className="info-container-input"
            type="text"
            onChange={(e) => setIdToCall(e.target.value)}
            value={idToCall}
            placeholder="ID to Call"
          />
          {callAccepted && !callEnded ? (
            <button className="options-btn" onClick={leaveCall}>
              ☎️ Hang up
            </button>
          ) : (
            <button className="options-btn" onClick={() => callUser(idToCall)}>
              📞 Call
            </button>
          )}
        </div>
      </form>

      {children}
    </div>
  );
}

export default Options;
