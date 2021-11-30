import { Alert, Button, Container, Grid, Snackbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import PassworScreen from './PassworScreen';
import UserNameScreen from './UserNameScreen';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        border: "2px solid grey",
        padding: 20,
        marginTop: 48
    },
    marginTop12: {
        marginTop: 12
    }
}))

function Login(props) {
    const classes = useStyles();

    const userDetails = {
        userName: "johnsmith",
        password: "john123"
    }

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [userName, setUserName] = useState("");
    const [showPassworScreen, setShowPassworScreen] = useState(false);
    const [showSignInToaster, setShowSignInToaster] = useState(false);
    const [showUserNameInvalidError, setShowUserNameInvalidError] = useState(false);
    const [showPasswordInvalidError, setShowPasswordInvalidError] = useState(false);

    const handleClose = () => {
        setShowSignInToaster(false);
    }

    return (
        <Container maxWidth="sm" className={classes.mainContainer}>
            <Grid container>
                {showSignInToaster ? <Snackbar
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    open={showSignInToaster}
                    autoHideDuration={5000}
                    onClose={handleClose}
                ><Alert severity="success" sx={{ width: '100%' }}>
                        Signed In!!
                    </Alert></Snackbar> : null}
                {!showPassworScreen ?
                    <UserNameScreen
                        register={register} errors={errors} showUserNameInvalidError={showUserNameInvalidError} />
                    : <PassworScreen userName={userName}
                        register={register} errors={errors} showPasswordInvalidError={showPasswordInvalidError} />}
                <Grid xs={12} className={classes.marginTop12}>
                    {!showPassworScreen ?
                        <Button fullWidth variant="contained" onClick={handleSubmit(data => {
                            if (data.userName !== userDetails.userName) {
                                setShowUserNameInvalidError(true);
                            } else {
                                setShowUserNameInvalidError(false);
                                setShowPassworScreen(true);
                                setUserName(data.userName);
                            }
                        })} style={{ textTransform: "none" }}>Next</Button>
                        : <Button fullWidth variant="contained" style={{ textTransform: "none" }}
                            onClick={handleSubmit(data => {
                                if (data.password !== userDetails.password) {
                                    setShowPasswordInvalidError(true);
                                } else {
                                    setShowPasswordInvalidError(false);
                                    setShowSignInToaster(true);
                                }
                            })} >Sign In</Button>}
                </Grid>
                <Grid container justifyContent="center" className={classes.marginTop12}>
                    <Typography>New to Autodesk?  <Link to="/create-account">Create Account</Link></Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Login;