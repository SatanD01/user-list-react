import React from "react";
import User from "./User";

class Users extends React.Component {
    render() {
        if (this.props.users.length > 0) {
            return (
                <div>
                    {this.props.users.map((user) => (<User editUser={this.props.editUser} deleteUser={this.props.deleteUser} key={user.id} user={user}/>))}
                </div>
            )
        } else {
            return (
                <div className='user'>
                    <h3>Users not found</h3>
                </div>
            )
        }
    }
}

export default Users;