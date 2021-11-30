import React from 'react';
import { Grid, OutlinedInput, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    headerText: {
        fontSize: "22px",
        lineHeight: 28,
        color: "#000000",
    },
    userNameText:{
        fontSize:14,
        lineHeight:20,
        color:"#808080"
    },
    marginBottom24: {
        marginBottom: 24
    }
}))

function PassworScreen(props) {
    const classes = useStyles();
    const {  userName, register, errors,showPasswordInvalidError } = props;
    return (
        <React.Fragment>
            <Grid container item xs={12} justifyContent="center">
                <Typography className={classes.headerText}>Welcome</Typography>
            </Grid>
            <Grid container item xs={12} justifyContent="center">
                <Typography className={classes.userNameText}>{userName}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography>Password</Typography>
            </Grid>
            <Grid item xs={12}>
                <OutlinedInput error={errors.userName || showPasswordInvalidError ? true : false} type="password" fullWidth placeholder="Enter password" 
                {...register("password", { required : "Please enter password" })} />
                {errors.password ? <Typography className="errorMsg">{errors.password.message}</Typography> : null}
                {showPasswordInvalidError ? <Typography className="errorMsg">Please check your password.</Typography> : null}
            </Grid>
        </React.Fragment>
    );
}

export default PassworScreen;