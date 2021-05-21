import {useHistory} from "react-router-dom";
import "../style/userStyle.css"
import InputField from "../components/InputField";
import {Avatar ,Button,Paper,Select,IconButton,Grid,Typography,InputAdornment,Container,TextField} from "@material-ui/core";
import LockOutLinedIcon from "@material-ui/icons/LockOutlined";
import React,{useState} from "react";
import AuthStyle from "../style/AuthStyle";
import {GoogleLogin} from "react-google-login";
import Icon from "../style/icon"
import {useDispatch} from "react-redux";
import {signin,signup} from "../action/auth.js";
import authReducer from "../reducers/auth";

const initialState ={type:'',firstName:'',lastName:'',email:'',password:'',conPass:''}
const initialAuthState ={state:'',action:''}
const SignIn = () =>{
    const classes = AuthStyle();
    const [showPassword,setShowpassword]= useState(false);
    const [isSignUp,setSignUp] =useState(false)
    const [formData,setFormData]=useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleShowPass =()=> setShowpassword((prevShowPass) =>!prevShowPass);

    const onSubmit=(e) =>{
        e.preventDefault();
        console.log(formData);
        if(isSignUp){
            dispatch(signup(formData,history))
        }else{
            dispatch(signin(formData,history))
        }
    }
    const onchange =(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    const swichText =()=>{
        setSignUp((prvIsSignUp)=>!prvIsSignUp);
        handleShowPass(false);
    }

    const googleSuccess = async (res)=>{
        const result = res?.profileObj;
        const token= res?.tokenId;
        try{
            console.log(result);
            console.log(token);
           const auth=authReducer({type:'AUTH',data:{result,token}});
           console.log(auth);
            dispatch({type:'AUTH',data:{result,token}});
            history.push('/')
        }catch (e) {
            console.log(e);
        }
    }
    const  googleFailure=(error)=>{
        console.error(error);
        console.log('Google sign in fail. Try again');
    }

    return (
        <Container component="main" className="container"   maxWidth="md">

                <Paper className={classes.paper} maxWidth="xs" elevation={3}>

                    <div >
                        <Avatar className={classes.avatar}>
                         <LockOutLinedIcon/>
                        </Avatar>
                        <Typography variant="h5">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                     </div>
                    <form className={classes.form} onSubmit={onSubmit}>
                        <label className="user-label">Select user type:</label>
                        <Select name="type" className="user-select" autoFocus required onChange={onchange}>
                            <option value="customer">Customer</option>
                            <option value="seller">Seller</option>
                        </Select>
                        <Grid container spacing={2}>
                            {
                                isSignUp &&(
                                    <>
                                            <InputField  name= "firstName" label="First Name" handleOnchange={onchange} autoFocus xs={6}/>
                                            <InputField   name= "lastName" label="Last Name" handleOnchange={onchange}  xs={6}/>
                                    </>
                                )}
                            <InputField  name="email" label="E-mail" handleOnchange={onchange} type="email"  />
                            <InputField  name="password" label="Password" handleOnchange={onchange} type={showPassword ? "text" : "password" } handleShowPass={handleShowPass}/>
                            {
                                isSignUp &&<InputField name="conPass" label="Confirm password" handleOnchange={onchange} type="password"/>
                            }
                        </Grid>

                        <Button className={classes.submit} type="submit" fullWidth variant="contained" color="secondary">{isSignUp ? 'Sign Up' : 'Sign In'}</Button>
                         <hr/>
                         <Typography variant="h6" align="center">Or</Typography>

                        <GoogleLogin clientId="732734550783-q2f0octb50ust6rnfna7iqhtn7ardo59.apps.googleusercontent.com"
                            render={(renderProps)=>(
                                <Button className={classes.googleButton}
                                        color='primary'
                                        fullWidth
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                        startIcon={<Icon/>}
                                        variant="contained">
                                    Google Sign In
                                </Button>
                            )}
                                     onSuccess={googleSuccess}
                                     onFailure={googleFailure}
                                     cookiePolicy="single_host_origin"
                         />
                        <Grid container justify="center">
                             <Grid item>
                                 <Button className={classes.button} onClick={swichText}>
                                     {isSignUp ? 'Already have account ? Sign In' : 'Need a account ? Sign Up'}
                                 </Button>
                             </Grid>
                         </Grid>
                    </form>
                </Paper>
        </Container>
    )
};

export default SignIn