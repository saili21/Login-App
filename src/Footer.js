import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme)=>({
    customFooter: {
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: 50,
        background: "grey",
      }
}))

function Footer(props) {
    const classes = useStyles();
    return (
        <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            className={classes.customFooter}>
            <Grid item>
                <Typography>Your account for everything Autodesk</Typography>
            </Grid>
            <Grid item>
                <Typography><a href="#">Learn More</a></Typography>
            </Grid>
        </Grid>
    );
}

export default Footer;