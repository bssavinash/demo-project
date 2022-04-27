import { render } from "@testing-library/react";
import React from "react";

const Delete = (props) => {
    const handleClick = () => {
        
    }
    return (
        <div className="main">
        <div>
            <h1>Delete item</h1>
            <h1>Do you want to delete item ??</h1>
            <button className="ui button green center" onClick={handleClick}>Yes</button>
            <button className="ui button red center" onClick={handleClickNo}>No</button>
        </div>
        </div>
    )
}

export default Delete