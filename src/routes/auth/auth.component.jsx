
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up/sign-up.component";
import './auth.styles.scss';

const Authentication = () => {
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

    // const logGoogleUser = async () => {
    //     const response = await signInWithGooglePopup();
    //     createUserDocumentFromAuth(response.user);
    //     console.log(response);
    // }


    return (
        <div className="authentication-container">

            <SignInForm/>
            <SignUpForm/>
            {/* <button onClick={signInWithGoogleRedirect}> sign in with redirect</button> */}
        </div>
    );
}

export default Authentication;