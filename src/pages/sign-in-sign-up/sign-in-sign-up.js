import React from 'react';
import './sign-in-sign-up.scss';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';


const SignInSignUp = () => (
    <div className='sign-in-sign-up'>
        <SignIn />
        <SignUp/>
    </div>
);

export default SignInSignUp;