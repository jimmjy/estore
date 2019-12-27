import React from 'react';

import './sign-in-and-signup.styles.scss';
import SignIn from '../../components/signin/SignIn.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUpPage;