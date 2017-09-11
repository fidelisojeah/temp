import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: 0,
    };
  }
  render() {
    return (
      <form>
        <div className="row">
          <div className="form-group col-xs-6">
            <input type="text" required="required" name="register-firstname" />
            <label className="control-label" htmlFor="input">First Name</label>
            <i className="bar" />
          </div>
          <div className="form-group col-xs-6">
            <input type="text" required="required" name="register-lastname" />
            <label className="control-label" htmlFor="input">Last Name</label>
            <i className="bar" />
          </div>
        </div>

        <div className="form-group">
          <input type="text" required="required" name="register-username" />
          <label className="control-label" htmlFor="input">Username</label>
          <i className="bar" />
        </div>
        <div className="form-group">
          <input type="email" required="required" name="register-email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" />
          <label className="control-label" htmlFor="input">Email Address</label>
          <i className="bar" />
        </div>
        <div className="form-group">
          <input type="phone" name="register-phone" />
          <label className="control-label" htmlFor="input">Phone Number</label>
          <i className="bar" />
        </div>
        <div className="form-group">
          <input type="password" required="required" name="register-password" />
          <label className="control-label" htmlFor="input">Password</label>
          <i className="bar" />
        </div>
        <div className="form-group">
          <input type="password" required="required" name="register-confirm-password" />
          <label className="control-label" htmlFor="input">Confirm Password</label>
          <i className="bar" />
        </div>
        <div className="button-container">
          <button className="button btn">
            <span>Register</span>
          </button>
        </div>
      </form>
    );
  }
}
export default SignupForm;
