import React, { Component } from "react";

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { firstName, avatar, timestamp, lastName, attachment, message } = this.props;
    return (
      <div className="message-container">
        <div>
          <img className="avatar" src={avatar} alt="avatar" />
        </div>
        <div>
          <p className="timestamp">{timestamp}</p>
          <h3 className="full_name">
            {firstName} {lastName}
          </h3>
          <div className="message-container-text">
            <p className="message">{message ?? "message empty"}</p>
            {attachment ? <img className="attachment" src={attachment} alt="attachement" /> : null}
          </div>
        </div>
      </div>
    );
  }
}
