import React from "react";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
    const { id, name, email } = props.contact
    return (
        <div className="item">
            <img className="ui avtar image" src="https://raw.githubusercontent.com/dmalvia/React_Tutorial_Contact_Manager_App/master/src/images/user.png" alt="user" ></img>
            <div className="content">
                <Link
                    to={`/contact/${id}`}
                    state={{ contact: props.contact }}
                >
                    <div className="header">
                        {name}
                    </div>
                    <div className="header">
                        {email}
                    </div>
                </Link>
            </div>
            <i className="trash alternate outline icon" style={{ color: "red", marginTop: "7px" }} onClick={() => props.clickHandler(id)}></i>
        </div>
    )
}

export default ContactCard