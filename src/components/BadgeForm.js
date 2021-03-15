import React from "react";

class BadgeForm extends React.Component {
  /**
   * Handle para el evento de clic sobre el botón.
   * @param {Object} e - evento de clic capturado
   */
  handleClick = (e) => {
    console.log("Button was clicked");
  };

  /**
   * Render function.
   */
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.props.onSubmit} action="">
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
            <label htmlFor="">Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
            <label htmlFor="">E-mail</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
            <label htmlFor="">Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
            <label htmlFor="">Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>

          {this.props.error && (
            <p> className="text-danger" {this.props.error}</p>
          )}
        </form>
      </React.Fragment>
    );
  }
  on;
}

export default BadgeForm;
