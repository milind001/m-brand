import React from 'react';
import './sign-in.scss';
import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';

import { auth, signInWithGoogle } from '../../firebase/firebase.util';

class SignIn extends React.Component{
    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = await this.state;

        try{
            
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email:'', password: '' });

        } catch (err) {
            console.log(err);
        }        
    };

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value });
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account!</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} autoComplete="off">
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email}
                        handleChange={this.handleChange} 
                        label='email'
                        required 
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password}
                        handleChange={this.handleChange}  
                        label='password'
                        required 
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Google Sign in </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}


export default SignIn;