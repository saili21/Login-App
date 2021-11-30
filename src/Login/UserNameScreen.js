import React from 'react';
import { Grid, OutlinedInput, Typography } from '@mui/material';
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

function UserNameScreen(props) {
    const classes = useStyles();

    const { register, errors, showUserNameInvalidError } = props;
    return (
        <React.Fragment>
            <Grid className={classes.marginBottom24}>
                <Typography className={classes.headerText}>Sign In</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography>Username</Typography>
            </Grid>
            <Grid item xs={12}>
                <OutlinedInput error={errors.userName || showUserNameInvalidError ? true : false} fullWidth placeholder="Enter username"
                    {...register("userName", { required: "Please enter username" })} />
                {errors.userName ? <Typography className="errorMsg">{errors.userName.message}</Typography> : null}
                {showUserNameInvalidError ? <Typography className="errorMsg">The user name is not recognized.</Typography> : null}
            </Grid>
        </React.Fragment>
    );
}

export default UserNameScreen;