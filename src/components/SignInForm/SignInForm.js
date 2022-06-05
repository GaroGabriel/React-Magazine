import React, {useState} from 'react';
import './signInForm.scss'

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
} from '../../routes/utils/firebase/firebase'
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";



const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password} = formFields;


    const resetFormFilds = () => {
        setFormFields(defaultFormFields)
    }
    const signInWithGoogle = async () => {
        await signInWithGooglePopup()

    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password)

            resetFormFilds()

        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for e-mail');
                    break
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break
                default:
                    console.log(error);
            }
            if (error.code === 'auth/wrong-password') {
                alert('incorrect password for e-mail');
            } else if (error.code === 'auth/user-not-found') {
                alert('incorrect password for e-mail');
            }
        }
    }
    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({
            ...formFields,
            [name]: value
        })
    }

    return (
        <div className='signIn'>
            <h2 className='signIn__title'>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    required
                    type="email"
                    name='email'
                    value={email}
                    onChange={handleChange}/>
                <FormInput
                    label='Password'
                    required
                    type="password"
                    name='password'
                    value={password}
                    onChange={handleChange}/>
                <div className="signIn__buttons">
                    <Button type='submit'>Sign In</Button>
                    <Button
                        onClick={signInWithGoogle}
                        buttonType='google'
                        type='button'
                    >google sign in</Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
