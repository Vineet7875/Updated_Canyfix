import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardHeader, CardContent, Typography, IconButton, Checkbox, Button } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';

import { removeFromCart } from './store';

const Cart = () => {
    const cartItems = useSelector((state) => state.cartItems);
    const dispatch = useDispatch();
    const [quantities, setQuantities] = useState({});
    const handleDelete = (itemId) => {
        dispatch(removeFromCart(itemId));
    };

    const calculateTotal = () => {
        let total = 0;
        cartItems.forEach(item => {
            const quantity = quantities[item.id] || 1;
            total += item.price * quantity;
        });
        return total;
    };
    
    const calculateGrandTotal = () => {
        let total = 0;
        cartItems.forEach(item => {
          const quantity = quantities[item.id] || 1;
          total += item.price * quantity;
        });
        return total;
      };

    const decreaseQuantity = (itemId) => {
        const currentQuantity = quantities[itemId] || 1;
        if (currentQuantity > 1) {
            setQuantities(prevQuantities => ({
                ...prevQuantities,
                [itemId]: currentQuantity - 1
            }));
        }
    };

    const increaseQuantity = (itemId) => {
        const currentQuantity = quantities[itemId] || 1;
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [itemId]: currentQuantity + 1
        }));
    };
    const handleDeleteAllItems = () => {
        // Dispatch the removeFromCart action with no payload
        dispatch(removeFromCart());
        setQuantities({});
    };

    if (cartItems.length === 0) {
        return <Typography variant="h4" style={{fontFamily: 'Titillium Web, sans-serif', fontSize: '2.5rem', display: 'flex', justifyContent: 'center',marginTop: '2rem',fontWeight:'bold' }}>No items in cart</Typography>;
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem', paddingTop: '2rem',backgroundColor:'var(--primary-color)' }}>
            <Card style={{ marginBottom: '16px', width: '100%', maxWidth: '700px' }}>
                <CardHeader
                    title={
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography variant="h4" style={{ fontFamily: 'Titillium Web, sans-serif', fontSize: '2.5rem', fontWeight: 'bold' }}>Cart</Typography>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <IconButton
                                    aria-label="Delete item"
                                    onClick={() => handleDeleteAllItems()}
                                    style={{ padding: '4px', fontFamily: 'Titillium Web, sans-serif', fontWeight: '600', color: 'black' }}
                                >
                                    <DeleteOutline />
                                </IconButton>
                                <Typography variant="subtitle1" style={{ marginRight: '4px', fontFamily: 'Titillium Web, sans-serif', fontWeight: '600' }}>Remove</Typography>
                            </div>
                        </div>
                    }
                />
                <CardContent>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Checkbox />
                            <Typography variant="subtitle1" style={{ fontFamily: 'Titillium Web, sans-serif', fontSize: '1.3rem' }}>Product</Typography>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="subtitle1" style={{ fontFamily: 'Titillium Web, sans-serif', fontSize: '1.3rem' }}>Price</Typography>
                        </div>
                    </div>
                    {cartItems.map(item => (
                        <Card key={item.id} style={{ marginBottom: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', padding: '8px', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center', padding: '8px' }}>
                                    <Checkbox />
                                    <img src={item.img} alt={item.model} style={{ width: '10rem' }} />
                                    <Typography variant="subtitle1" style={{ flexGrow: 1, fontFamily: 'Titillium Web, sans-serif', fontSize: '1.5rem', fontWeight: 'bold' }}>{item.model}</Typography>
                                </div>
                                <div style={{ display: 'flex', flexDirection: ' column', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid gray', borderRadius: '5px', padding: '0px 2px' }}>
                                        <IconButton
                                            aria-label="Decrease quantity"
                                            onClick={() => decreaseQuantity(item.id)}
                                            style={{ padding: '4px', fontFamily: 'Titillium Web, sans-serif', fontSize: '1.3rem', borderRadius: '50%' }}
                                        >
                                            -
                                        </IconButton>
                                        <Typography variant="subtitle1" style={{ margin: '0 8px', fontFamily: 'Titillium Web, sans-serif', fontSize: '1.3rem' }}>
                                            {quantities[item.id] || 1}
                                        </Typography>
                                        <IconButton
                                            aria-label="Increase quantity"
                                            onClick={() => increaseQuantity(item.id)}
                                            style={{ padding: '4px', fontFamily: 'Titillium Web, sans-serif', fontSize: '1.3rem', borderRadius: '50%' }}
                                        >
                                            +
                                        </IconButton>

                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <IconButton
                                            aria-label="Delete item"
                                            onClick={() => handleDelete(item.id)}
                                            style={{ padding: '4px', fontFamily: 'Titillium Web, sans-serif', fontWeight: '600', color: 'black' }}
                                        >
                                            <DeleteOutline />
                                        </IconButton>
                                        <Typography variant="subtitle1" style={{ marginRight: '4px', fontFamily: 'Titillium Web, sans-serif', fontWeight: '600' }}>Remove</Typography>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '8px' }}>
                                    <Typography variant="subtitle1" style={{ flexGrow: 1, fontFamily: 'Titillium Web, sans-serif', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                    ₹{item.price * (quantities[item.id] || 1)}
                                    </Typography>

                                </div>
                            </div>
                        </Card>
                    ))}
                </CardContent>
            </Card>
            <Card style={{ marginBottom: '16px', width: '100%', maxWidth: '400px' }}>
                <CardContent>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
                        <Typography variant="subtitle1" style={{ fontFamily: 'Titillium Web, sans-serif', fontSize: '1.3rem' }}>Subtotal</Typography>
                        <Typography variant="subtitle1" style={{ fontFamily: 'Titillium Web, sans-serif', fontSize: '1.3rem', fontWeight: '600' }}>₹{calculateGrandTotal()}</Typography>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                        <Typography variant="subtitle1" style={{ fontFamily: 'Titillium Web, sans-serif', fontSize: '1.3rem' }}>Discount</Typography>
                        <Typography variant="subtitle1" style={{ fontFamily: 'Titillium Web, sans-serif', fontSize: '1.3rem' }}>₹0</Typography>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
                        <Typography variant="h6" style={{ fontFamily: 'Titillium Web, sans-serif', fontSize: '1.7rem', fontWeight: '600' }}>Grand Total</Typography>
                        <Typography variant="h6" style={{ fontFamily: 'Titillium Web, sans-serif', fontSize: '1.7rem', fontWeight: '600' }}> ₹{calculateGrandTotal()}</Typography>
                    </div>
                    <Button variant="contained" color="primary" style={{ marginTop: '16px', backgroundColor: 'black', fontSize: '1.3rem' }} fullWidth>
                        Checkout Now
                    </Button>

                </CardContent>
            </Card>
        </div>
    );
};

export default Cart;
