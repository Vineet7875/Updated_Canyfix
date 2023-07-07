import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogActions, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: '2rem',
        fontWeight: 'bold',
        fontFamily: 'Titillium Web, sans-serif',

    },
    inputField: {
        margin: '1rem 0',
        '& .MuiInputLabel-root': {
            fontFamily: 'Titillium Web, sans-serif',
            fontSize: '1.6rem',
            color: 'black'
        },
        '& .MuiInputBase-input': {
            fontFamily: 'Titillium Web, sans-serif',
            fontSize: '1.4rem',
            fontWeight: 'normal',
        },
    },
    submitButton: {
        fontFamily: 'Titillium Web, sans-serif',
        backgroundColor: 'orange',
        color: 'white',
        padding: '1rem 4rem',
        borderRadius: '3rem',
        fontSize: '1.5rem',
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
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [dateError, setDateError] = useState('');
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    console.log("open")
  };

  const handleClose = () => {
    setOpen(false);
    console.log("close")
  };

  const handleSubmit = () => {
    // Perform validation
    if (name.trim() === '') {
      setNameError('Please enter a name.');
      return;
    }

    if (phoneNumber.trim() === '') {
      setPhoneNumberError('Please enter a phone number.');
      return;
    }

    const phoneNumberRegex = /^\d{10}$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
      setPhoneNumberError('Please enter a valid 10-digit phone number.');
      return;
    }

    // Proceed with submission logic
    setOpen(false);
  };

  // Update submit button enable/disable state
  useEffect(() => {
    setIsSubmitEnabled(name.trim() !== '' && phoneNumber.trim() !== '');
  }, [name, phoneNumber]);

  return (
    <>
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
            maxWidth: '400px',
          },
        }}
      >
        {/* Your dialog content */}
        <DialogContent>
          <TextField
            label="Name"
            className={classes.inputField}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameError('');
            }}
            fullWidth
            required
            error={!!nameError}
            helperText={nameError}
          />
          <TextField
            label="Phone Number"
            className={classes.inputField}
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
              setPhoneNumberError('');
            }}
            fullWidth
            required
            error={!!phoneNumberError}
            helperText={phoneNumberError}
          />
          <TextField
            type="date"
            className={classes.inputField}
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              setDateError('');
            }}
            fullWidth
            style={{ marginTop: '2rem' }}
            error={!!dateError}
            helperText={dateError}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary" className={classes.submitButton} disabled={!isSubmitEnabled} >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DialogBox;
