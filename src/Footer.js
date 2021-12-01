import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { padding } from '@mui/system';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    customFooter: {
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: 60,
        background: "grey",
        paddingTop: 10,
        paddingBottom:10
    }
}))

function Footer(props) {
    const classes = useStyles();
    return (
        <Grid container
            justifyContent="center"
            className={classes.customFooter}>
            <Grid container justifyContent="center" item xs={12}>
                <Typography>Your account for everything Autodesk</Typography>
            </Grid>
            <Typography><a href="/">Learn More</a></Typography>
        </Grid>
    );
}

export default Footer;