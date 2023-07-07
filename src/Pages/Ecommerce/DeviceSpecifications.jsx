import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardContent, CardMedia, Typography, Grid, Button, IconButton, makeStyles } from '@material-ui/core';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
    fontFamily: 'ui-serif',
    background:'var(--primary-color)'
  },
  container: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'colomn',
    },
  },
  cardMedia: {
    height: 0,
    paddingTop: '50%',
    backgroundSize: 'contain',
    margin: '2rem 0rem',
  },
  smallCardContainer: {
    margin: theme.spacing(1, 0),
  },
  smallCard: {
    height: '100%',
    padding: '1rem',
  },
  quantityContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    gap: '2rem'

  },
  quantityButton: {
    minWidth: 0,
    padding: theme.spacing(1),
  },
  colorContainer: {
    display: 'flex',
    gap: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  gap: {
    margin: theme.spacing(4, 0),
  },

  BtnContainer: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'baseline',
    },
    [theme.breakpoints.up('md')]: {
      gap: '1rem',
    },
  },

  addToCartButton: {
    fontFamily: 'Titillium Web, sans-serif',
    marginTop: '2rem',
    backgroundColor: 'white',
    color: 'black',
    padding: '1rem 4rem',
    borderRadius: '3rem',
    fontSize: '1.2rem',
    cursor: 'pointer',
    border: '1px solid black',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white'
    },
  },

  BuyNowButton: {
    fontFamily: 'Titillium Web, sans-serif',
    marginTop: '2rem',
    backgroundColor: 'green',
    color: 'white',
    padding: '1rem 4rem',
    borderRadius: '3rem',
    fontSize: '1.2rem',
    cursor: 'pointer',
    border: '1px solid green',
    '&:hover': {
      backgroundColor: '#44924c',
      color: 'white'
    },
  },
  stockText: {
    fontFamily: 'Titillium Web, sans-serif',
    fontSize: '1rem',
    fontWeight: 'bold'
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    marginTop: theme.spacing(2),
    fontSize: '2rem',
  },
  icon: {
    color: 'orange',
  },
}));


const DeviceSpecifications = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { item } = location.state;
  const dispatch = useDispatch();
  const classes = useStyles();
  const [quantity, setQuantity] = useState(1);
  const cartItems = useSelector((state) => state.cartItems);
  const handleQuantityDecrease = () => {
    setQuantity(quantity - 1);
  };

  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleBuyNowButtonClick = () => {
    console.log(quantity)
    navigate('/Purchase', { state: { item, quantity } });
  };
  const handleAddToCart = (item) => {
    const isAlreadyAdded = cartItems.some((cartItem) => cartItem.id === item.id);
    if (!isAlreadyAdded) {
      dispatch({ type: 'ADD_TO_CART', payload: item });
    }
  };

  return (

    <div className={classes.root}>
      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardMedia className={classes.cardMedia} image={item.img} title="item Image" />
          </Card>
          <Grid container spacing={2} className={classes.smallCardContainer}>
            {[1, 2, 3, 4].map((index) => (
              <Grid key={index} item xs={3}>
                <Card className={classes.smallCard}>
                  <CardMedia component="img" alt="Small Image" height="100%" image={item.img} title="Small Image" />
                </Card>
              </Grid>
            ))}
          </Grid>

        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h3" component="h2" gutterBottom className={classes.itemName} style={{ fontFamily: 'Titillium Web, sans-serif', fontSize: '2.5rem', fontWeight: 'bold' }}>
                {item.model}
              </Typography>
              <Typography variant="body1" gutterBottom style={{ fontFamily: 'Titillium Web, sans-serif', fontSize: '1.2rem' }}>
                {item.desc}
              </Typography>
              <div>
                <StarIcon style={{ color: 'green' }} />
                <StarIcon style={{ color: 'green' }} />
                <StarIcon style={{ color: 'green' }} />
                <StarIcon style={{ color: 'green' }} />
                <StarIcon style={{ color: 'green' }} />
              </div>
              <div className={classes.gap} />
              <Typography variant="h4" gutterBottom style={{ fontFamily: 'Titillium Web, sans-serif', fontSize: '2rem', fontWeight: 'bold' }}>
              ₹{item.price}
              </Typography>
              <Typography variant="body1" gutterBottom style={{ fontFamily: 'Titillium Web, sans-serif', fontSize: '1.2rem' }}>
                Some text
              </Typography>
              <div className={classes.gap} />
              <Typography variant="h5" component="h3" gutterBottom style={{ fontFamily: 'Titillium Web, sans-serif', fontSize: '1.7rem', fontWeight: 'bold' }}>
                Choose a Color
              </Typography>
              <div className={classes.colorContainer}>
                <div style={{ backgroundColor: 'red', borderRadius: '50%', width: 30, height: 30 }} />
                <div style={{ backgroundColor: 'green', borderRadius: '50%', width: 30, height: 30 }} />
                <div style={{ backgroundColor: 'blue', borderRadius: '50%', width: 30, height: 30 }} />
                <div style={{ backgroundColor: 'yellow', borderRadius: '50%', width: 30, height: 30 }} />
                <div style={{ backgroundColor: 'purple', borderRadius: '50%', width: 30, height: 30 }} />
              </div>
              <div className={classes.gap} />
              <div className={classes.quantityContainer}>
                <div style={{ display: 'flex', alignItems: 'center', background: 'lightgray', borderRadius: '1rem' }}>
                  <IconButton className={classes.quantityButton} onClick={handleQuantityDecrease} disabled={quantity === 1} style={{ fontFamily: 'Titillium Web, sans-serif', fontSize: '1.5rem', fontWeight: 'bold', backgroundColor: 'lightgray', borderRadius: '1rem', padding: '8px' }}>
                    -
                  </IconButton>
                  <Typography variant="body1" gutterBottom style={{ margin: '0 8px', fontFamily: 'Titillium Web, sans-serif', fontSize: '1.5rem' }}>
                    {quantity}
                  </Typography>
                  <IconButton className={classes.quantityButton} onClick={handleQuantityIncrease} style={{ fontFamily: 'Titillium Web, sans-serif', fontSize: '1.5rem', fontWeight: 'bold', backgroundColor: 'lightgray', borderRadius: '1rem', padding: '8px' }}>
                    +
                  </IconButton>
                </div>
                <Typography variant="body2" className={classes.stockText}>
                  Only 21 stocks are left
                </Typography>
              </div>
              <div className={classes.BtnContainer}>
                <Button variant="contained" color="primary" className={classes.BuyNowButton} onClick={() => handleBuyNowButtonClick()}>
                  Buy Now
                </Button>
                <Button variant="contained" color="secondary" className={classes.addToCartButton} onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </Button>
              </div>
              <div className={classes.gap} />
              <div className={classes.gap} />

              {/* First Div */}
              <div className={classes.iconContainer}>
                <LocalShippingIcon className={classes.icon} />
                <Typography variant="h5" style={{ fontFamily: 'Titillium Web, sans-serif', fontSize: '1.5rem', fontWeight: 'bold' }}>Free Delivery</Typography>
              </div>
              <Typography variant="body1" gutterBottom style={{ fontFamily: 'Titillium Web, sans-serif', fontSize: '1.2rem', marginLeft: '2rem' }}>
                Some text about free delivery.
              </Typography>

              <div className={classes.gap} />

              {/* Second Div */}
              <div className={classes.iconContainer}>
                <ArrowBackIcon className={classes.icon} />
                <Typography variant="h5" style={{ fontFamily: 'Titillium Web, sans-serif', fontSize: '1.5rem', fontWeight: 'bold' }}>Return Delivery</Typography>
              </div>
              <Typography variant="body1" gutterBottom style={{ fontFamily: 'Titillium Web, sans-serif', fontSize: '1.2rem', marginLeft: '2rem' }}>
                Some text about return delivery.
              </Typography>

            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeviceSpecifications;
