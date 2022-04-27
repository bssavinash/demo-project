import React, { useState } from "react";
import {browserHistory} from "react-router"
import { useNavigate } from "react-router-dom";

function AddContact(props) {
    const [data, setData] = useState({ name: "", email: "" })
    const navigate = useNavigate()
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const add = (e) => {
        e.preventDefault()
        if (data.name === "" && data.email === "") {
            alert("All feilds are mandatory")

            return
        }
        props.addContactHandler(data)
        setData({ ...data, name: "", email: "" })
        console.log(data)
        navigate('/')
        // navigate.goBack()
    }

    return (
        <div className="ui main">
            <h2> Add Contact Here</h2>
            <h2> Add Contact Here</h2>
            <form className="ui form" onSubmit={add} onPress={() => {
                navigate.goBack();
            }}>
                <div className="ui field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" value={data.name} onChange={handleChange} />
                </div>
                <div className="ui field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Email" value={data.email} onChange={handleChange} />
                </div>
                <button className="ui button blue">Add</button>

            </form>

        </div>
    );
}


// class AddContact extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: '',
//             email: ''
//         }
//     }
//     handleChange = (e) => {
//         this.setState({ [e.target.name]: e.target.value })
//     }
//     add = (e) => {
//         e.preventDefault()
//         if (this.state.name === "" && this.state.email === "") {
//             alert("All feilds are mandatory")

//             return
//         }
//         this.props.addContactHandler(this.state)
//         this.setState({name:"",email:""})
//         console.log(this.props)
//         // let navigate = useNavigate();
//         // navigate("/")
//         // browserHistory.push("/")
//     }
//     render() {
//         return (
//             <div className="ui main">
//                 <h2> Add Contact Here</h2>
//                 <h2> Add Contact Here</h2>
//                 <form className="ui form" onSubmit={this.add}>
//                     <div className="ui field">
//                         <label>Name</label>
//                         <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
//                     </div>
//                     <div className="ui field">
//                         <label>Email</label>
//                         <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
//                     </div>
//                     <button className="ui button blue">Add</button>

//                 </form>

//             </div>
//         );
//     }
// }

export default AddContact