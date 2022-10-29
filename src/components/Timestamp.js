import React from "react";

function Timestamp(prop) {
    console.log(prop)
    return (
        <span className="timestamp">{prop.time}</span>
        );
}

export default Timestamp;