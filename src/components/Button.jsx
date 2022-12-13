import "../assets/css/Button.css";
import React from "react";

const Button = props =>
        <button
            onClick={_ => props.click && props.click(props.label)}
            className={`
                Button
                ${props.double ? "double" : ""}
                ${props.triple ? "triple" : ""}
                ${props.op ? "op" : ""}
            `}
        >
            { props.label }
        </button>

export default Button;