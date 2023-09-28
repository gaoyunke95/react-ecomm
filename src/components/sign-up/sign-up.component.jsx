import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-up.styles.scss';
import Button from "../button/button.componen";
//initilize fields
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    console.log(event);
    event.preventDefault();
    console.log(password, confirmPassword);

    if (password !== confirmPassword) {
        alert("passwords do not match");
        return ;
    }

    console.log("password matched");
    
    try {
        const {user} = await createAuthUserWithEmailAndPassword(email, password);

        await createUserDocumentFromAuth(user, {displayName});
        resetFormFields();
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            alert('Can not craete user, email already in use');
        }else {
            console.log('error on creating email and password user', error.message);
        }
    }

  }
  const handleChange = (event) => {
    const {name, value} = event.target; //descturing using {}
    setFormFields({...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>sign up with your email and password</span>
      <form onSubmit={handleSubmit}>

        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        ></FormInput>

        <FormInput
          label='Email'
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        ></FormInput>

        <FormInput
          label='Password'
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        ></FormInput>

        <FormInput
          label='Confirm Password'
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        ></FormInput>

        <Button buttonType='google-sign-in' type='submit'>sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
