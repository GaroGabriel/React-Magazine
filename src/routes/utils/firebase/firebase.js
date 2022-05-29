
import {initializeApp} from "firebase/app";


import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMkVq9QAfc_PDBLSP4s9tyzVQFNJpVRQs",
    authDomain: "react-magazine-7124a.firebaseapp.com",
    projectId: "react-magazine-7124a",
    storageBucket: "react-magazine-7124a.appspot.com",
    messagingSenderId: "464835783603",
    appId: "1:464835783603:web:d72b62eb0a6b30d482b9c6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const  signInWithGoogleRedirect = ()=>signInWithRedirect(auth,googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth,additionalInformation={}) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid)


    const userSnapshot = await getDoc(userDocRef)

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date()
        try {
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        }catch (e) {
            console.log('error creating the user', e)
        }
    }
    return userDocRef

}

export const createAuthUserWithEmailAndPassword = async (email,password)=>{
    console.log({email, password})
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password)
}
