import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle} from '../../firebase/firebase.utils';

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
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        type="Email"
                        name='email'
                        value={this.state.email}
                        required
                        label='Email'
                    />
                    <FormInput
                        handleChange={this.handleChange}
                        type="Password"
                        name='password'
                        value={this.state.password}
                        required
                        label='Password'
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;