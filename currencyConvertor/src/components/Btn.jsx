import React from "react";
function Btn({
    text,
    onClick,
    type = "buttuon",
    style = {},
    className = "" 
}){
    return(
        <button
        type = {type}
        onClick={onClick}
        style={style}
        className={`btn ${className}`}
        >{text}</button>
    )
}

export default Btn;