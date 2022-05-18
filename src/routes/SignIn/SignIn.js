import {useEffect} from 'react';
import {getRedirectResult} from 'firebase/auth';
import {
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect
} from "../utils/firebase/firebase";


const SignIn = () => {
    useEffect(() => {
        async function fetchData() {
            const response = await getRedirectResult(auth)
            if(response){
                const userDocRef = await createUserDocumentFromAuth(response.user)
            }

        }

        fetchData();

    }, [])
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <div className='container'>
            <h1>sign in</h1>
            <button onClick={logGoogleUser}>
                sign in with google popup
            </button>
            <button onClick={signInWithGoogleRedirect}>
                sign in with google redirect
            </button>
        </div>
    );
};

export default SignIn;
