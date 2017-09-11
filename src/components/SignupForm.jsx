import React from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      passwordConfirmation: '',
      password: '',
      email: '',
      firstname: '',
      lastname: '',
      phone: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.userSignupRequest(this.state);
    // axios.post('/api/v4/users/signup', this.state);
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="row">
          <div className="form-group col-xs-6">
            <input
              type="text"
              value={this.state.firstname}
              required="required"
              name="firstname"
              onChange={this.onChange}
            />
            <label className="control-label" htmlFor="input">First Name</label>
            <i className="bar" />
          </div>
          <div className="form-group col-xs-6">
            <input
              type="text"
              value={this.state.lastname}
              required="required"
              name="lastname"
              onChange={this.onChange}
            />
            <label className="control-label" htmlFor="input">Last Name</label>
            <i className="bar" />
          </div>
        </div>

        <div className="form-group">
          <input
            value={this.state.username}
            type="text"
            required="required"
            name="username"
            onChange={this.onChange}
          />
          <label className="control-label" htmlFor="input">Username</label>
          <i className="bar" />
        </div>
        <div className="form-group">
          <input
            type="email"
            value={this.state.email}
            required="required"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            onChange={this.onChange}
          />
          <label className="control-label" htmlFor="input">Email Address</label>
          <i className="bar" />
        </div>
        <div className="form-group">
          <input
            type="phone"
            value={this.state.phone}
            name="phone"
            onChange={this.onChange}
          />
          <label className="control-label" htmlFor="input">Phone Number</label>
          <i className="bar" />
        </div>
        <div className="form-group">
          <input
            type="password"
            value={this.state.password}
            required="required"
            name="password"
            onChange={this.onChange}
          />
          <label className="control-label" htmlFor="input">Password</label>
          <i className="bar" />
        </div>
        <div className="form-group">
          <input
            type="password"
            value={this.state.passwordConfirmation}
            required="required"
            name="passwordConfirmation"
            onChange={this.onChange}
          />
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
SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
};
export default SignupForm;
