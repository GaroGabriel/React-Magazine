import React, {useContext, useState} from 'react';
import './signUpForm.scss'

import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../routes/utils/firebase/firebase'
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import {UserContext} from "../../contexts/user-context";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields;

    const resetFormFilds = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            alert('password do not match')
            return
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, {displayName})
            resetFormFilds()
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('cannot create user, email already in use')
            } else {
                console.log('user error ', error);
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
        <div className='signUp'>
            <h2 className='signUp__title'>Don`t have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='display Name'
                    required
                    type="text"
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                />
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
                <FormInput
                    label='Confirm Password'
                    type="password"
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}/>
                <Button type='submit'>submit</Button>
            </form>
        </div>
    );
};

export default SignUpForm;
