import { Alert, Button, Container, Grid, Snackbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import PassworScreen from './PassworScreen';
import UserNameScreen from './UserNameScreen';
import {  Link } from 'react-router-dom';

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
        userName: "admin",
        password: "admin"
    }

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassworScreen, setShowPassworScreen] = useState(false);
    const [showSignInToaster, setShowSignInToaster] = useState(false);


    const verifyUserName = () => {
        if (userName === userDetails.userName) {
            setShowPassworScreen(true);
        } else {
            setShowPassworScreen(false);
        }
    }

    const signIn = () => {
        if (password === userDetails.password) {
            setShowSignInToaster(true);
        } else {
            setShowSignInToaster(false);
        }
    }

    const handleClose = () => {
        setShowSignInToaster(false);
    }

    return (
        <Container maxWidth="sm" className={classes.mainContainer}>
            <Grid container>
                {showSignInToaster ? <Snackbar
                anchorOrigin={{ vertical:"top", horizontal:"center" }}
                    open={showSignInToaster}
                    autoHideDuration={5000}
                    onClose={handleClose}
                ><Alert severity="success" sx={{ width: '100%' }}>
               Signed In!!
              </Alert></Snackbar> : null}
                {!showPassworScreen ? <UserNameScreen setUserName={setUserName} userName={userName} />
                    : <PassworScreen setPassword={setPassword} password={password} userName={userName} />}
                <Grid xs={12} className={classes.marginTop12}>
                    {!showPassworScreen ? <Button fullWidth variant="contained" onClick={verifyUserName} style={{ textTransform: "none" }}>Next</Button>
                        : <Button fullWidth variant="contained" style={{ textTransform: "none" }} onClick={signIn} >Sign In</Button>}
                </Grid>
                <Grid xs={12} className={classes.marginTop12}>
                    <Typography>New to Autodesk?  <Link to="/create-account">Create Account</Link></Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Login;