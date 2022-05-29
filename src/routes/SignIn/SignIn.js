

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    } from "../utils/firebase/firebase";
import SignUpForm from "../../components/SignUpForm/SignUpForm";



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
            <SignUpForm/>
        </div>
    );
};

export default SignIn;
