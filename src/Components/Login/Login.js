
import './Login.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from './firebase.config';
import {  useContext, useState } from 'react';
import {UserContext} from '../../App';
import{useHistory, useLocation} from 'react-router-dom';



firebase.initializeApp(firebaseConfig)
const Login=()=> {
 const [newUser, setNewUser]= useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  })

  

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  // Google sign in
  const handleGoogleSignIn = () => {
    firebase.auth()
      .signInWithPopup(googleProvider)
      .then((res) => {

        const { displayName, email } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
        }
        setUser(signedInUser)
        setLoggedInUser(signedInUser);
        history.replace(from);
        console.log(displayName, email)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage, errorCode)
      });

  }


  // Form validation

  const handleBlur = (e) => {
    console.log(e.target.name, e.target.value);
    let isFormValid = true;
    if (e.target.name === 'email') {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value)
      isFormValid = isPasswordValid && passwordHasNumber

    }

    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }

  const handleSubmit = (e) => {
    console.log(user.email, user.password);
    if (newUser && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(res => {
        const newUserInfo= {...user};
        newUserInfo.error='';
        newUserInfo.success=true;
      setUser(newUserInfo);
      updateUserName(user.name)
      })
      .catch((error) => {

      const newUserInfo= {...user};
      newUserInfo.error= error.message;
      newUserInfo.succes=false
        setUser(newUserInfo)
        // ..
      });
    }
    if(!newUser && user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  .then((res) => {
    const newUserInfo= {...user};
    newUserInfo.error='';
    newUserInfo.success=true;
  setUser(newUserInfo);
  setLoggedInUser(newUserInfo);
  history.replace(from)
  console.log('sign in info', res.user);
  })
  .catch((error) => {
   
    const newUserInfo= {...user};
    newUserInfo.error= error.message;
    newUserInfo.succes=false
      setUser(newUserInfo);
 
  

  });
    }
    e.preventDefault();

  }
  const updateUserName=name=>{
    const user = firebase.auth().currentUser;

user.updateProfile({
  displayName: name
 
}).then(() => {
  console.log('Update user name successfully.')
}).catch((error) => {
  console.log(error);
});  
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}  className="mx-auto m-4 p-4 shadow-lg rounded">
      <h5 className="text-success text-center py-3">Login Form</h5>
   {newUser &&    <input type="text" className="form-control " name="name" onBlur={handleBlur} placeholder="Enter your name" required />}
        <br />
        <input type="text" className="form-control " name="email" onBlur={handleBlur} placeholder="Enter your email" required />
        <br />
        <input type="password" className="form-control " name="password" onBlur={handleBlur} placeholder="Enter your password" required />
        <br />
        <input type="submit" value={newUser ? 'Register' : 'Sign in'} className='btn btn-success px-4 py-1' />
                <p className='text-center py-3 text-secondary'>{newUser ? 'Already have an account?' : 'Create a new account'}
                    <input type="checkbox" name="signin" id="signin" onChange={() => {setNewUser(!newUser) }} className='d-none'  />
                    <label htmlFor="signin" className='mx-1 text-primary sign-in-toggle'>{newUser ? 'Sign in' : ' Register'}</label>
                </p>
      </form>
    
 <p style={{color:'red'}}>{user.error}</p>
   {/* Google Sign in  */}

            <p className="text-center">Or</p>
        <div className="text-center">
        <button className="btn btn-dark px-4 py-2" onClick={handleGoogleSignIn}>Sign in with Google</button>
        
  
    
        </div>
    </div>
  );
}

export default Login;
