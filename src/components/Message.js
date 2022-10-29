import React from "react";

function Message(prop) {
    // console.log(prop.image)
    return (
        <p className="message">
          {prop.message}
        </p>
        );
}

export default Message;