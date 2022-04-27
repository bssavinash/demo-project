import React from "react";
import { Link, useLocation } from "react-router-dom";

const ContactDetail = (props) => {
    const location = useLocation();
    const { contact } = location.state
    const { name, email } = contact
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img className="ui avtar image" src="https://raw.githubusercontent.com/dmalvia/React_Tutorial_Contact_Manager_App/master/src/images/user.png" alt="user" ></img>
                </div>
                <div className="content">
                    <div className="header">
                        {name}
                    </div>
                    <div className="description">
                        {email}
                    </div>
                </div>
                <Link to={'/'}>
                    <button className="ui button blue center">Back to Contact List</button>
                </Link>
            </div>
        </div>
    )
}

export default ContactDetail