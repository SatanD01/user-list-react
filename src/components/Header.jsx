import React from "react";

class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <h1>
                    {this.props.helpText}
                </h1>
            </header>
        )
    }

}

export default Header;