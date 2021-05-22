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
import {singIn,singUp} from "../action/auth.js";
import authReducer from "../reducers/auth";

const initialState ={type:'',firstName:'',lastName:'',email:'',password:'',conPass:''};


/**
 * sign in and sign up component
 * @returns {*}
 * @constructor
 */
const SignIn = () =>{
    //style
    const classes = AuthStyle();
    //states
    const [showPassword,setShowpassword]= useState(false);
    const [isSignUp,setSignUp] =useState(false)
    const [formData,setFormData]=useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleShowPass =()=> setShowpassword((prevShowPass) =>!prevShowPass);

    /**
     * form submit
     * @param e
     */
    const onSubmit=(e) =>{
        e.preventDefault();
        console.log(formData);
        if(isSignUp){
            dispatch(singUp(formData,history));
        }else{
            dispatch(singIn(formData,history));
        }
    }

    /**
     * on text field value change
     * @param e
     */
    const onchange =(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    /**
     * switch form mode sign in and sign up
     */
    const swichText =()=>{
        setSignUp((prvIsSignUp)=>!prvIsSignUp);
        setShowpassword(false);
    }

    /**
     * google button function when success
     * @param res
     * @returns {Promise<void>}
     */
    const googleSuccess = async (res)=>{

        const result = res?.profileObj;
        const token= res?.tokenId;
        try{
            console.log(result);
            console.log(token);
           const auth=authReducer({type:'AUTH',data:{result,token}});
            const user = [
                {
                    type:"customer",
                    firstName:result.givenName,
                    lastName:result.familyName,
                    email:result.email,
                    password:"user",
                    conPass:"user",
                }
            ];
            console.log("auth "+ user);

            dispatch(singUp(user,history));
            dispatch({type:'AUTH',data:{result,token}});
            history.push('/')
        }catch (e) {
            console.log(e);
        }
    }

    /**
     * google button function when fail
     * @param error
     */
    const  googleFailure=(error)=>{
        console.error(error);
        console.log('Google sign in fail. Try again');
    }

    return (
        <Container component="main" className="container"   maxWidth="md">

                <Paper className={classes.paper} maxWidth="mdx" elevation={3}>

                    <div >
                        <Avatar className={classes.avatar}>
                         <LockOutLinedIcon/>
                        </Avatar>
                        <Typography variant="h5">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                     </div>
                    <form className={classes.form} onSubmit={onSubmit}>

                        {
                            isSignUp &&(
                                <>
                                    <label className="user-label">Select user type:</label>
                                    <Select name="type" className="user-select" autoFocus required onChange={onchange}>
                                        <option value="customer">Customer</option>
                                        <option value="seller">Seller</option>
                                    </Select>
                                </>
                            )}
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