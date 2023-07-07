import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogActions, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: '2rem',
        fontWeight: 'bold',
        fontFamily: 'Titillium Web, sans-serif',
    },
    subtitle: {
        fontSize: '1.2rem',
    },
    continueButton: {
        fontFamily: 'Titillium Web, sans-serif',
        backgroundColor: 'orange',
        color: 'white',
        padding: '1rem 2rem',
        borderRadius: '3rem',
        fontSize: '1rem',
        cursor: 'pointer',
        border: '1px solid orange',
        '&:hover': {
            backgroundColor: '#ffa500b3',
            color: 'white'
        },
    },
}));

function DialogBox() {
    const navigate = useNavigate();
    const classes = useStyles();
    const [open, setOpen] = useState(true);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        navigate('./Ecommerce')
    };

    return (
        <>
            {/* <Button onClick={handleOpen} color="primary">
                Open Dialog
            </Button> */}

            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="sm"
                fullWidth
                PaperProps={{
                    style: {
                        borderRadius: '20px',
                        textAlign: 'center',
                        alignItems: 'center',
                        padding: '3rem',
                        maxWidth: '300px',
                    },
                }}
            >
                <div className={classes.title}>Your Order has been placed</div>
                <DialogContent>
                    <p className={classes.subtitle}>Transaction ID: 3534675474</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" className={classes.continueButton} >
                        Continue Shopping
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default DialogBox;
