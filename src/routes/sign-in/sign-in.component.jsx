import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        createUserDocumentFromAuth(response.user);
        console.log(response);
    }
    
    return (
        <div>
            SignIn Component;
            <button onClick={logGoogleUser}> sign in with google </button>
        </div>
    );
}

export default SignIn;