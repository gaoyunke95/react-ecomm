import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
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
        //the in this we didnt tell firebase about the display name , so the display name will be null
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
    
    
    // console.log(docRef);
    // return docRef;
  }
  const handleChange = (event) => {
    const {name, value} = event.target; //descturing using {}
    setFormFields({...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up user and password</h1>
      <form onSubmit={handleSubmit}>
        <label>UserName</label>
        <input
        //   className="sign-in-displayname"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        ></input>

        <label>Email</label>
        <input
        //   className="sign-in-email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        ></input>

        <label>Password</label>
        <input
        //   className="sign-in-password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        ></input>

        <label>ConfirmPassword</label>
        <input
        //   className="sign-in-confirm-password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        ></input>

        <button>sign up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
