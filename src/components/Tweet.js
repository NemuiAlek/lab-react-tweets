
import React from "react";
import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Action from "./Action";

function Tweet(prop) {
  //console.log(prop.tweet.user.image)
  return (
    <div className="tweet">
      <ProfileImage image={prop.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userData={prop.tweet.user} />
          <Timestamp time={prop.tweet.timestamp} />
        </div>

        <Message message={prop.tweet.message} />
        <Action />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
