import React from "react";
import AddUser from "./AddUser";
import {IoCloseCircleSharp, IoHammerSharp} from "react-icons/io5";

class User extends React.Component {
    user = this.props.user;
    constructor(props) {
        super(props);

        this.state = {
            editForm: false
        }
    }

    render() {
        return (
            <div className='user'>
                {<IoCloseCircleSharp onClick={() => this.props.deleteUser(this.user.id)} className='delete-icon'/>}
                {<IoHammerSharp onClick={() => {
                    this.setState({
                        editForm: !this.state.editForm
                    })
                }} className='edit-icon'/>}
                <h3>{this.user.first_name} {this.user.last_name}</h3>
                <img src={this.user.avatar} alt=""/>
                <p>{this.user.email}</p>
                <p>{this.user.age}</p>
                <b>{this.user.isHappy ? 'Happy )' : 'Sad ('}</b>

                {this.state.editForm && <AddUser user={this.user} onAdd={this.props.editUser}/>}
            </div>
        )
    }

}

export default User;