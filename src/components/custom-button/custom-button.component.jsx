import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} {...otherProps}>
        {children}
        {console.log(isGoogleSignIn)}
    </button>
);

export default CustomButton;