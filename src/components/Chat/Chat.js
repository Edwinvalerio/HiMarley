import React, { Component } from "react";
import Message from "./Message";

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: [
        {
          id: 1,
          avatar: "https://i.pravatar.cc/300",
          firstName: "Edwin",
          lastName: "Valerio",
          sent_message: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        },
        {
          id: 2,
          timestamp: new Date().toLocaleTimeString(),
          avatar: "https://gravatar.com/avatar/48415c810cab3cb67578cb1a116fb013?s=400&d=robohash&r=x",
          firstName: "Edwin",
          lastName: "Valerio",
          sent_message: "ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          attachment: "https://images.pexels.com/photos/4219883/pexels-photo-4219883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          id: 3,
          avatar: "https://gravatar.com/avatar/ed576cfd89cfb8eb98a91cc44e03d548?s=400&d=robohash&r=x",
          firstName: "Edwin",
          lastName: "Valerio",
          sent_message: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
          id: 3,
          avatar: "https://gravatar.com/avatar/ed576cfd89cfb8eb98a91cc44e03d548?s=400&d=robohash&r=x",
          firstName: "Edwin",
          lastName: "Valerio",
          sent_message: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          attachment: "https://images.pexels.com/photos/4511372/pexels-photo-4511372.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
      ],
      message: "",
      sendDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }
  handleChange(e) {
    console.log(e);
    if (e.target.value.length <= 200) {
      this.setState({
        [e.target.name]: e.target.value,
        sendDisabled: e.target.value.length > 0 ? false : true,
      });
    }
  }

  sendMessage() {
    if (this.state.message) {
      this.setState({
        message: "",
        sendDisabled: true,
        chat: [
          ...this.state.chat,
          {
            timestamp: new Date().toLocaleTimeString(),
            id: 0,
            sent_message: this.state.message,
            firstName: "Edwin",
            lastName: "Valerio",
            avatar: "https://joeschmoe.io/api/v1/" + Math.floor(Math.random() * 100),
          },
        ],
      });
    }
  }
  render() {
    return (
      <div className="chat-container">
        <div className="chat_log">
          {this.state.chat.map((message, index) => (
            <Message
              attachment={message.attachment}
              key={index}
              timestamp={message.timestamp}
              message={message.sent_message}
              avatar={message.avatar}
              firstName={message.firstName}
              lastName={message.lastName}
            />
          ))}
        </div>
        <div className="message_boxz_container">
          <textarea className="message_area" name="message" value={this.state.message} onChange={this.handleChange} placeholder="Say Hello to Marley"></textarea>
          <div id="message_icons">
            <i className="fas fa-paperclip"></i>
            <i className="far fa-smile"></i>
            <p>{this.state.message.length}/200</p>
            {!this.state.sendDisabled ? (
              <button id="send_btn" onClick={() => this.sendMessage()}>
                Send
                <i class="fas fa-paper-plane"></i>
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
