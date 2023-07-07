import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Grid, TextField, CardMedia, Radio, FormControlLabel, RadioGroup, Button } from '@material-ui/core';

const stylesLabel = {
    fontFamily: 'Titillium Web, sans-serif',
    fontSize: '1.2rem',
    fontWeight: '600',
    color: 'black'
};
const stylesInput = {
    fontFamily: 'Titillium Web, sans-serif',
    fontSize: '1.3rem',
    color: 'black'
};
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        background:'var(--primary-color)',
        padding:'2rem 0rem'
    },
    leftCard: {
        width: '40%',
        marginRight: theme.spacing(2),
        border: 'none',
    },
    rightCard: {
        width: '40%',
    },
    subCard: {
        marginBottom: theme.spacing(2),
        
    },
    cardMedia: {
        height: 0,
        paddingTop: '50%',
        backgroundSize: 'contain',
        margin: '2rem 0rem',
    },
    smallCard: {
        height: '100%',
        padding: '1rem',
    },
    gap: {
        margin: theme.spacing(2, 0),
    },
    couponSection: {
        marginBottom: theme.spacing(2),
    },
    paymentSection: {
        marginBottom: theme.spacing(2),
    },
    paymentOptions: {
        flexDirection: 'row',
    },
    ApplyCouponButton: {
        fontFamily: 'Titillium Web, sans-serif',
        // marginTop: '1rem',
        backgroundColor: 'green',
        color: 'white',
        padding: '1rem 2rem',
        borderRadius: '3rem',
        fontSize: '1rem',
        cursor: 'pointer',
        border: '1px solid green',
        '&:hover': {
            backgroundColor: '#44924c',
            color: 'white'
        },
    },
    radioLabel: {
        fontFamily: 'Titillium Web, sans-serif',
        fontSize: '1.2rem',
        '&$radioChecked': {
            color: 'green',
        },
    },
    radioChecked: {},
    [theme.breakpoints.down('sm')]: {
        root: {
            flexDirection: 'column',
            alignItems: 'center',
        },
        leftCard: {
            width: '100%',
            marginBottom: theme.spacing(2),
        },
        rightCard: {
            width: '100%',
        },
    },
    [theme.breakpoints.down('xs')]: {
        ApplyCouponButton: {
            padding: '0.5rem 1.2rem',
            fontSize: '0.7rem',
            borderRadius: '2rem',
        },
    }

}));

const Purchase = () => {
    const location = useLocation();
    const { item, quantity } = location.state;
    const classes = useStyles();
    const [paymentMethod, setPaymentMethod] = useState('cash-on-delivery');

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };
    return (
        <div className={classes.root}>
            <div className={classes.leftCard}>
                <Card className={classes.subCard}>
                    <CardContent>
                        <h2 style={{ fontFamily: 'Titillium Web, sans-serif', fontSize: '2rem', fontWeight: 'bold' }}>Review item And Shipping</h2>
                        <div className={classes.gap} />
                        <Grid container alignItems="center" spacing={3} justifyContent="flex-end">
                            <Grid xs={3} item>
                                <Card className={classes.smallCard}>
                                    <CardMedia component="img" alt="Small Image" height="100%" image={item.img} title="Small Image" />
                                </Card>
                            </Grid>
                            <Grid xs={6} item>
                                <h3 style={{ fontFamily: 'Titillium Web, sans-serif', fontSize: '1.7rem', fontWeight: 'bold' }}>{item.model}</h3>
                                <p style={{ fontFamily: 'Titillium Web, sans-serif', fontSize: '1rem' }}>Order: Pink</p>
                            </Grid>
                            <Grid xs={3} item>
                                <h4 style={{ fontFamily: 'Titillium Web, sans-serif', fontSize: '1.5rem', fontWeight: 'bold' }}>₹{item.price}</h4>
                                <p style={{ fontFamily: 'Titillium Web, sans-serif', fontSize: '1rem' }}>Quantity: {quantity}</p>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>

                <Card className={classes.subCard}>
                    <CardContent>
                        <h2 style={{ fontFamily: 'Titillium Web, sans-serif', fontSize: '2rem', fontWeight: 'bold' }}>Delivery Information</h2>
                        <div className={classes.gap} />
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    label="First Name"
                                    fullWidth
                                    required
                                    InputLabelProps={{ style: stylesLabel }}
                                    inputProps={{ style: stylesInput }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Last Name"
                                    fullWidth
                                    required
                                    InputLabelProps={{ style: stylesLabel }}
                                    inputProps={{ style: stylesInput }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Address"
                                    fullWidth
                                    required
                                    InputLabelProps={{ style: stylesLabel }}
                                    inputProps={{ style: stylesInput }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="City Name"
                                    fullWidth
                                    required
                                    InputLabelProps={{ style: stylesLabel }}
                                    inputProps={{ style: stylesInput }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Zip Code"
                                    fullWidth
                                    required
                                    InputLabelProps={{ style: stylesLabel }}
                                    inputProps={{ style: stylesInput }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Mobile"
                                    fullWidth
                                    required
                                    InputLabelProps={{ style: stylesLabel }}
                                    inputProps={{ style: stylesInput }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Email"
                                    fullWidth
                                    required
                                    InputLabelProps={{ style: stylesLabel }}
                                    inputProps={{ style: stylesInput }}
                                    type="email"
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
            <Card className={classes.rightCard}>
                <CardContent>
                    {/* Content for the right card */}
                    <h2 style={{ fontFamily: 'Titillium Web, sans-serif', fontSize: '2.2rem', fontWeight: 'bold' }}>Order Summary</h2>
                    <div className={classes.gap} />
                    <div className={classes.couponSection}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={6}>
                                <TextField
                                    label="Coupon Code"
                                    fullWidth
                                    InputLabelProps={{ style: stylesLabel }}
                                    inputProps={{ style: stylesInput }}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="contained" color="primary" className={classes.ApplyCouponButton}>
                                    Apply Coupon
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.gap} />
                    <div className={classes.paymentSection}>
                        <h3 style={{ fontFamily: 'Titillium Web, sans-serif', fontSize: '1.7rem', fontWeight: 'bold' }}>Payment Details</h3>
                        <RadioGroup aria-label="payment-method" name="payment-method" value={paymentMethod} onChange={handlePaymentMethodChange}>
                            <FormControlLabel
                                value="cash-on-delivery"
                                control={<Radio />}
                                label="Cash on Delivery"
                                classes={{
                                    label: classes.radioLabel,
                                    checked: classes.radioChecked,
                                }}
                            />
                            <FormControlLabel
                                value="payout-shpcart-card"
                                control={<Radio />}
                                label="Payout Shpcart Card"
                                classes={{
                                    label: classes.radioLabel,
                                    checked: classes.radioChecked,
                                }}
                            />
                            <FormControlLabel
                                value="credit-debit-card"
                                control={<Radio />}
                                label="Credit or Debit Card"
                                classes={{
                                    label: classes.radioLabel,
                                    checked: classes.radioChecked,
                                }}
                            />
                        </RadioGroup>
                        {/* 
                        <div className={classes.paymentOptions}>
                            <img src="payment-amazon.png" alt="Amazon Pay" />
                            <img src="payment-visa.png" alt="Visa" />
                        </div> */}
                        <div className={classes.gap} />
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    label="Email"
                                    fullWidth
                                    required
                                    type='email'
                                    InputLabelProps={{ style: stylesLabel }}
                                    inputProps={{ style: stylesInput }}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    label="Card Holder Name"
                                    fullWidth
                                    required
                                    InputLabelProps={{ style: stylesLabel }}
                                    inputProps={{ style: stylesInput }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Expiry"
                                    fullWidth
                                    required
                                    InputLabelProps={{ style: stylesLabel }}
                                    inputProps={{ style: stylesInput }}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    label="CVC"
                                    fullWidth
                                    required
                                    InputLabelProps={{ style: stylesLabel }}
                                    inputProps={{ style: stylesInput }}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Purchase;
