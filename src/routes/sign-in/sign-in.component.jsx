
import SignUpForm from "../../components/sign-up/sign-up.component";
import {  signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    // useEffect(() => {
    //     async function fetchResponse() {
    //         const response = await getRedirectResult(auth);
    //         console.log(response);
    //         if (response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //             console.log(userDocRef);
    //         }
    //     }
    //     fetchResponse();
    // }, []);

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        createUserDocumentFromAuth(response.user);
        console.log(response);
    }


    return (
        <div>
            SignIn Component;
            <button onClick={logGoogleUser}> sign in with google </button>
            <SignUpForm/>
            {/* <button onClick={signInWithGoogleRedirect}> sign in with redirect</button> */}
        </div>
    );
}

export default SignIn;