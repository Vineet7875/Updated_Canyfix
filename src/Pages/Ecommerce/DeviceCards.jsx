import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    IconButton,
    Button,
    makeStyles,
} from '@material-ui/core';
import { Favorite, Star } from '@material-ui/icons';
import data from '../../JSONDATA/DevicesData.json';

const useStyles = makeStyles({
    gridContainer: {
        padding: '1rem 3rem',
        backgroundColor:'var(--primary-color)'
    },
    card: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
    },
    favoriteIcon: {
        position: 'absolute',
        top: 8,
        right: 8,
    },
    image: {
        height: 200,
        objectFit: 'contain',
        marginTop: '2rem',
        cursor: 'pointer'
    },
    typography: {
        fontFamily: 'Titillium Web, sans-serif',

    },
    desc: {
        fontSize: '1.2rem',
    },
    price: {
        fontSize: '1.5rem',
        fontWeight: '600',
    },
    name: {
        fontSize: '1.8rem',
        fontWeight: '600',
        cursor: 'pointer'
    },
    addToCartButton: {
        fontFamily: 'Titillium Web, sans-serif',
        marginTop: '1rem',
        backgroundColor: 'white',
        color: 'black',
        padding: '1rem 2rem',
        borderRadius: '3rem',
        fontSize: '1rem',
        cursor: 'pointer',
        border: '1px solid black',
        '&:hover': {
            backgroundColor: 'black',
            color: 'white'
        },
    },
});

const DevicesCard = () => {
    const navigate = useNavigate();
    const classes = useStyles();
    const dispatch = useDispatch();
    const [favorites, setFavorites] = useState([]);
    const cartItems = useSelector((state) => state.cartItems);
    const handleFavoriteClick = (id) => {
        if (favorites.includes(id)) {
            setFavorites(favorites.filter((fav) => fav !== id));
        } else {
            setFavorites((prevFavorites) => [...prevFavorites, id]);
        }
    };

    const isFavorite = (id) => favorites.includes(id);
    const handleProductClick = (item) => {
        navigate('/Specifications', { state: { item } });
    };
    const handleAddToCart = (item) => {
        const isAlreadyAdded = cartItems.some((cartItem) => cartItem.id === item.id);
        if (!isAlreadyAdded) {
            dispatch({ type: 'ADD_TO_CART', payload: item });
        }
    };
    return (

        <Grid container className={classes.gridContainer}>
            <Typography variant="h3" gutterBottom className={classes.typography} style={{ marginTop: '3rem', marginBottom: '3rem', fontWeight: '600' }}>
                Mobiles For You!
            </Typography>
            <Grid container spacing={3}>
                {data.map((item) => (
                    <Grid key={item.id} item xs={12} sm={6} md={3}>
                        <Card className={classes.card}>
                            <IconButton
                                className={classes.favoriteIcon}
                                aria-label="add to favorites"
                                onClick={() => handleFavoriteClick(item.id)}
                                color={isFavorite(item.id) ? 'secondary' : 'default'}
                            >
                                <Favorite />
                            </IconButton>

                            <CardMedia
                                component="img"
                                alt={item.model}
                                image={item.img}
                                className={classes.image}
                                onClick={() => handleProductClick(item)}
                            />

                            <CardContent>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="h6" className={`${classes.typography} ${classes.name}`} onClick={() => handleProductClick(item)}>
                                        {item.model}
                                    </Typography>
                                    <Typography variant="h6" className={`${classes.typography} ${classes.price}`}>
                                    ₹{item.price}
                                    </Typography>
                                </div>
                                <Typography variant="subtitle1" className={`${classes.typography} ${classes.desc}`}>
                                    {item.desc}
                                </Typography>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            style={{ color: 'green', fontSize: '16px' }}
                                        />
                                    ))}
                                </div>
                                <Button variant="contained" color="primary" className={classes.addToCartButton}
                                    onClick={() => handleAddToCart(item)}>
                                    Add to Cart
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default DevicesCard;
