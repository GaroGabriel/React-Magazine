import React from 'react';
import {signInWithGooglePopup , createUserDocumentFromAuth} from "../utils/firebase/firebase";


const SignIn = () => {
    const logGoogleUser = async ()=>{
        const {user} = await signInWithGooglePopup()
        await createUserDocumentFromAuth(user)
    }
    return (
        <div className='container'>
          <h1>sign in</h1>
            <button onClick={logGoogleUser}>
                sign in with google popup
            </button>
        </div>
    );
};

export default SignIn;
