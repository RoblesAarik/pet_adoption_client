import React from "react";
import Form from "./Form";

class Modal extends React.Component {
  render() {
    return (
      <div className="modal">
        <h1>Add a pet</h1>
        <Form handleSubmit={this.props.handleSubmit} />
        <button onClick={this.props.toggleModal}>Close</button>
      </div>
    );
  }
}

export default Modal;
