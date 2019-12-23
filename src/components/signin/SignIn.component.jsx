import React from 'react';

import './signin.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            email: '',
            password: ''
        });
    };

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        type="email"
                        name='email'
                        value={this.state.email}
                        required
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={this.handleChange}
                        type="password"
                        name='password'
                        value={this.state.password}
                        required
                    />
                    <label htmlFor="password">Password</label>

                    <input type="submit" value="submit form" />
                </form>
            </div>
        )
    }
}

export default SignIn;