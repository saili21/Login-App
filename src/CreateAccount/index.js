import { Alert, Button, Container, Grid, OutlinedInput, Snackbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        border: "2px solid grey",
        padding: 20,
        marginTop: 48
    },
    marginTop12: {
        marginTop: 12
    },
    headerText: {
        fontSize: "22px",
        lineHeight: 28,
        color: "#000000",
    },
    marginBottom24: {
        marginBottom: 24
    },
    marginBottom16: {
        marginBottom: 16
    }
}))


function CreateAccountForm(props) {
    const classes = useStyles();

    const { register, handleSubmit, getValues, formState: { errors } } = useForm();

    const [showCreateAccountToaster, setShowCreateAccountToaster] = useState(false);

    return (
        <Container maxWidth="sm" className={classes.mainContainer}>
            {showCreateAccountToaster ? <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={showCreateAccountToaster}
                autoHideDuration={5000}
            ><Alert severity="success" sx={{ width: '100%' }}>
                    Account created successfully!!
                </Alert></Snackbar> : null}
            <Grid container>
                <Grid className={classes.marginBottom24}>
                    <Typography className={classes.headerText}>Create Account</Typography>
                </Grid>

                <Grid container className={classes.marginBottom16} spacing={2}>
                    <Grid item xs={6}>
                        <Grid item xs={12}>
                            <Typography>First Name</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <OutlinedInput error={errors.firstName ? true : false}
                                {...register("firstName", { required: "Please enter your first name" })} fullWidth placeholder="Enter first name" />
                            {errors.firstName ? <Typography className="errorMsg">{errors.firstName.message}</Typography> : null}
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid item xs={12}>
                            <Typography>Last Name</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <OutlinedInput error={errors.lastName ? true : false} {...register("lastName", { required: "Please enter your last name" })} fullWidth placeholder="Enter last name" />
                            {errors.lastName ? <Typography className="errorMsg">{errors.lastName.message}</Typography> : null}
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container className={classes.marginBottom16}>
                    <Grid item xs={12}>
                        <Grid item xs={12}>
                            <Typography>Username</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <OutlinedInput error={errors.userName ? true : false} fullWidth placeholder="Enter username" {...register("userName", { required: "Please enter your user name" })} />
                            {errors.userName ? <Typography className="errorMsg">{errors.userName.message}</Typography> : null}
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container className={classes.marginBottom16}>
                    <Grid item xs={12}>
                        <Grid item xs={12}>
                            <Typography>Re-type username</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <OutlinedInput fullWidth placeholder="Re-type username"
                                {...register("reTypeUserName", { validate: value => value === getValues("userName") || "Please enter same user name" })} />
                            {errors.reTypeUserName ? <Typography className="errorMsg">{errors.reTypeUserName.message}</Typography> : null}
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container className={classes.marginBottom16}>
                    <Grid item xs={12}>
                        <Grid item xs={12}>
                            <Typography>Password</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <OutlinedInput error={errors.password ? true : false} fullWidth placeholder="Password" type="password"
                                {...register("password", { required: "Please enter your password" })} />
                            {errors.password ? <Typography className="errorMsg">{errors.password.message}</Typography> : null}
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container className={classes.marginBottom16}>
                    <Grid item xs={12}>
                        <Grid item xs={12}>
                            <Typography>Re-type password</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <OutlinedInput fullWidth placeholder="Re-type password" type="password"
                                 {...register("reTypePassord", { validate: value => value === getValues("password") || "Please enter same password" })} />
                            {errors.reTypePassord ? <Typography className="errorMsg">{errors.reTypePassord.message}</Typography> : null}
                        </Grid>
                    </Grid>
                </Grid>

                <Grid xs={12} className={classes.marginTop12}>
                    <Button fullWidth variant="contained" style={{ textTransform: "none" }}
                        onClick={handleSubmit(data => {
                            if(Object.keys(errors).length === 0) {
                                setShowCreateAccountToaster(true);
                            }
                        }
                        )}>Create Account</Button>
                </Grid>

                <Grid container justifyContent="center" className={classes.marginTop12}>
                    <Typography>Already have an account?  <Link to="/">Sign in</Link></Typography>
                </Grid>

            </Grid>
        </Container>
    );
}

export default CreateAccountForm;