
import './Login.css';
import React, {useState, useContext} from 'react'
import firebaseConfig from './firebase.config'
import *as firebase from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { Button , Form} from 'react-bootstrap';
import {UserContext} from '../../App';
import {useHistory, useLocation} from 'react-router-dom';
firebase.initializeApp(firebaseConfig)



 const Login=()=> {
   const[loggenInUser, setLoggedInUser]= useContext(UserContext)
  const [newUser, setnewUser]=useState(false)
  const [user, setUser]= useState({
    name:'',
    email:'',
    password:'',
    error:'',
   success:false
  })


  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn =()=>{
      const auth = getAuth();
      signInWithPopup(auth, provider)
      .then((result) => {
        const {displayName, email}= result.user;
        const signedInUser={
          name:displayName,
          email:email,
          
        }
      // console.log(displayName, email, photoURL);
      setUser(signedInUser);
      setLoggedInUser(signedInUser);
      history.replace(from);
      })
    
  .catch(err=>{
    console.log(err);
    console.log(err.message);
  })
  
    }
  const handleChange=(e)=>{
 
    let isFormValid = true;
    if(e.target.name==="email"){
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    console.log(e.targe.name, e.target.value);
    if(e.target.name==="password"){
      const isPasswordValid = e.target.value.length>6;
      const passwordHasNumber =/\d{1}/.test(e.target.value);
      isFormValid = isPasswordValid && passwordHasNumber;
    }
    if(isFormValid){ 
    const newUserInfo ={...user};
    newUserInfo[e.target.name]=e.target.value;
    setUser(newUserInfo);
    }
    }
    
    const handleSubmit=(e)=>{
      if(user.email && user.password)
      {
       
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((res) => {
          const newUserInfo = {...user};
        newUserInfo.error='';
        newUserInfo.success= true;
        setUser(newUserInfo);
          console.log(res);
          updateUserName(user.name)
        })
        .catch((error) => {
          const newUserInfo = {...user};
         newUserInfo.error= error.message;
         newUserInfo.success= false;
         setUser(newUserInfo);
         
       
        });
        if(!newUser && user.email && user.password){
          const auth = getAuth();
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then((res) => {
          const newUserInfo = {...user};
          newUserInfo.error='';
          newUserInfo.success= true;
          setUser(newUserInfo);
        console.log('sign in user info',res.user);
        })
        .catch((error) => {
          const newUserInfo = {...user};
          newUserInfo.error= error.message;
          newUserInfo.success= false;
          setUser(newUserInfo);
        });
        }
          e.preventDefault();
      }
      
       const updateUserName =(name)=>{
        const auth = getAuth();
        updateProfile(auth.currentUser, {
          displayName:name
          
        }).then(() => {
         console.log('update name successfully')
        }).catch((error) => {
       console.log(error);
        });
       }
    }
  return (
    
   
 <div >
<div className="d-flex justify-content-center"> 
<Form className="h-50  p-5  border border-dark shadow-sm p-3  bg-body rounded mt-5 w-25" onSubmit={handleSubmit}>
   <h4 className="text-success text-center" >Login</h4>
  <Form.Group className="mb-3" >
  {newUser && <Form.Label >Name</Form.Label> }
   {newUser &&  <Form.Control id="name" name="name" onChange={handleChange} type="name" placeholder="Enter your name" required/>}
    <Form.Label>Email address</Form.Label>
    <Form.Control  name="email" onChange={handleChange} type="email" placeholder="Enter email" required />
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label >Password</Form.Label>
    <Form.Control onChange={handleChange} name="password" type="password" placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Check type="checkbox" label="Remember me" />
  </Form.Group>
  <Button variant="success"  type="submit">
 {newUser? 'Sign up': 'Log in'}
  </Button>
<br/>
<br/>
  {/* {
  newUser ? <p>Already have a account <button onClick={()=>setnewUser(!newUser)} id="#name">Sign in</button></p>: <p>Create an account <button onClick={()=>setnewUser(!newUser)} >Sign up</button></p>
} */}

{newUser ?<p>Already have a account <input type="button" value="Sign in" name="newUser" onClick={()=>setnewUser(!newUser)}/></p>: <p>Create a new account <input type="button" value="Sign up" name="newUser" onClick={()=>setnewUser(!newUser)}/></p>}
</Form>
</div>


<p className="text-center">Or</p>
<button className="text-center" onClick={handleGoogleSignIn}>Sign in with google</button>

 </div>

    
  );
}

export default Login;
