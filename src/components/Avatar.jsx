import React from "react";

function Avatar(props) {
    return(<img className="circle-img"
                src={props.src}
                alt="not found!"
                />);
}

export default Avatar;