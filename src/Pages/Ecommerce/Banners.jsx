import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  customCardContent: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
  },
  banner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '1rem 0rem',
    padding: '2rem 0rem',
    width: '95%',
    boxShadow: 'none',

    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '1rem 6rem',
    },
  },
  bannerImage: {
    marginTop: theme.spacing(2),
    // width: '100%',
    width: '22.5rem',
    height: '22.5rem',
    // height: 'auto',
    objectFit: 'cover',
    borderRadius: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
      width: '22.5rem',
      height: '22.5rem',
    },
  },
  headers: {
    color: '#44924c',
    marginBottom: theme.spacing(2),
    fontFamily: 'ui-serif',
    textAlign: 'left',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.5rem',
    },
  },
  buyButton: {
    backgroundColor: '#44924c',
    fontSize: '1.3rem',
    color: '#ffffff',
    borderRadius: theme.spacing(2),
    fontFamily: 'ui-serif',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#3a7e41',
    },
  },
}));

const Banners = () => {
  const classes = useStyles();

  return (
    <Card className={classes.banner}>
      <CardContent className={classes.customCardContent}>
        <Typography variant="h3" component="h1" className={classes.headers}>
          Grab Upto 50% Off On
        </Typography>
        <Typography variant="h3" component="h1" className={classes.headers}>
          Selected Mobiles
        </Typography>
        <Button variant="contained" className={classes.buyButton}>
          Buy Now
        </Button>
      </CardContent>
      <img className={classes.bannerImage} src="carry2.jpeg" alt="Headphone" />
    </Card>
  );
};

export default Banners;
