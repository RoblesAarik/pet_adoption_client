import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li onClick={this.props.toggleModal}>Add a Pet</li>
            <li>Sign In</li>
            <li>Sign Up</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
