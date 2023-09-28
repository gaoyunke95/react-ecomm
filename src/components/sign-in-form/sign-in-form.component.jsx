import Button from "../button/button.componen";
import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import "./sign-in-form.styles.scss";

const defaultSignInFieldValues = {
  email: "",
  password: "",
};

const logGoogleUser = async () => {
  const response = await signInWithGooglePopup();
  createUserDocumentFromAuth(response.user);
  console.log(response);
};

const SignInForm = () => {
  const [signInFields, setSignInFields] = useState(defaultSignInFieldValues);
  const { email, password } = signInFields;

  const resetFormFields = () => {
    setSignInFields(defaultSignInFieldValues);
  }

  const handleChange = (event) => {
    const { name, value } = event.target; //descturing using {}
    setSignInFields({ ...signInFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await signInAuthUserWithEmailAndPassword(email, password);
        console.log(response);
        resetFormFields();
    } catch (error) {
        if (error.code === 'auth/wrong-password') {
            alert("your email or password is invalid, please check")
        }
        console.log("unable to sign in with email and password", error.message);
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account</h2>
      <span> sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />

        <div className="buttons-container">
          <Button buttonType="inverted" type="submit">
            Sign In
          </Button>
          <Button buttonType="google" type='button' onClick={logGoogleUser}>
            Google Sign In 
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
