import React from 'react';
import {  Grid, OutlinedInput, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    headerText: {
        fontSize: "22px",
        lineHeight: 28,
        color: "#000000",
    },
    marginBottom24: {
        marginBottom: 24
    }
}))

function PassworScreen(props) {
    const classes = useStyles();
    const {setPassword, password,userName} = props;
    return (
        <React.Fragment>
        <Grid container item xs={12} justifyContent="center">
            <Typography className={classes.headerText}>Welcome</Typography>
        </Grid>
        <Grid container item xs={12} justifyContent="center">
            <Typography className="headerText">{userName}</Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography>Password</Typography>
        </Grid>
        <Grid item xs={12}>
            <OutlinedInput type="password" fullWidth value={password} placeholder="Enter password" onChange={(e)=>{
                setPassword(e.target.value);
            }} />
        </Grid>
    </React.Fragment>
    );
}

export default PassworScreen;