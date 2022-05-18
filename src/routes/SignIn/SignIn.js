

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    } from "../utils/firebase/firebase";


const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
        console.log(user.photoURL)
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
