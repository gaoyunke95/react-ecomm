import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
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
    <div>
      <h1>Sign up user and password</h1>
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

        <button>sign up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
