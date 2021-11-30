import React from 'react';
import { Grid, OutlinedInput, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { red } from '@mui/material/colors';

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

function UserNameScreen(props) {
    const classes = useStyles();

    const { setUserName, userName } = props;
    return (
        <React.Fragment>
            <Grid xs={12} className={classes.marginBottom24}>
                <Typography className={classes.headerText}>Sign In</Typography>
            </Grid>
            <Grid xs={12}>
                <Typography>Username</Typography>
            </Grid>
            <Grid xs={12}>
                <OutlinedInput fullWidth value={userName} placeholder="Enter username" onChange={(e) => {
                    setUserName(e.target.value);
                }} />
            </Grid>
        </React.Fragment>
    );
}

export default UserNameScreen;