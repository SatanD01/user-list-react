import React from "react";

class AddUser extends React.Component {
    userAdd = {}

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            bio: '',
            age: 1,
            isHappy: false
        }
    }

    render() {
        return (
            <form ref={(e) => this.myForm = e}>
                <input onChange={(e) => this.setState({first_name: e.target.value})} type="text" placeholder='Name'/>
                <input onChange={(e) => this.setState({last_name: e.target.value})} type="text" placeholder='Last Name'/>
                <textarea onChange={(e) => this.setState({email: e.target.value})} placeholder='Bio'/>
                <input onChange={(e) => this.setState({age: e.target.value})} type="number" placeholder='age'/>
                <div className='checkbox-block'>
                    <label htmlFor="isHappy">Is Happy ?</label>
                    <input onChange={(e) => this.setState({isHappy: e.target.checked})} type="checkbox" id='isHappy'/>
                </div>
                <button type='button' onClick={() => {
                    this.myForm.reset();
                    this.userAdd = {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        email: this.state.email,
                        age: this.state.age,
                        isHappy: this.state.isHappy
                    }
                    if (this.props.user) {
                        this.userAdd.id =this.props.user.id;
                    }
                    this.props.onAdd(this.userAdd)
                }}>Add</button>
            </form>
        )
    }

}

export default AddUser;