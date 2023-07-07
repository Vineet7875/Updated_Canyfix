import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    options: {
        fontFamily: 'Titillium Web, sans-serif',
        fontSize: '1.3rem'
    },
    box: {
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'stretch',
            gap: '1rem',
        },
    },
}));

const Options = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none', marginTop: '1rem' }}>
            <Toolbar sx={{ gap:'2rem',justifyContent:'center' }}>
                <Box className={classes.box}>
                    <Select value="" displayEmpty sx={{
                        fontFamily: 'Titillium Web, sans-serif',
                        borderRadius: '1.5rem',
                        height: '30px',
                        fontSize: '1.3rem'
                    }}>
                        <MenuItem value="" disabled className={classes.options}>
                            Headphone Type
                        </MenuItem>
                        <MenuItem value="name" className={classes.options}>Name</MenuItem>
                        <MenuItem value="price" className={classes.options}>Price</MenuItem>
                        <MenuItem value="rating" className={classes.options}>Rating</MenuItem>
                    </Select>
                    <Select value="" displayEmpty sx={{
                        fontFamily: 'Titillium Web, sans-serif',
                        borderRadius: '1.5rem',
                        height: '30px',
                        fontSize: '1.3rem'
                    }}>
                        <MenuItem value="" disabled className={classes.options}>
                            Price
                        </MenuItem>
                        <MenuItem value="name" className={classes.options}>Name</MenuItem>
                        <MenuItem value="price" className={classes.options}>Price</MenuItem>
                        <MenuItem value="rating" className={classes.options}>Rating</MenuItem>
                    </Select>
                    <Select value="" displayEmpty sx={{
                        fontFamily: 'Titillium Web, sans-serif',
                        borderRadius: '1.5rem',
                        height: '30px',
                        fontSize: '1.3rem'
                    }}>
                        <MenuItem value="" disabled>
                            Reviews
                        </MenuItem>
                        <MenuItem value="name" className={classes.options}>Name</MenuItem>
                        <MenuItem value="price" className={classes.options}>Price</MenuItem>
                        <MenuItem value="rating" className={classes.options}>Rating</MenuItem>
                    </Select>
                </Box>

                <Box className={classes.box}>
                    <Select value="" displayEmpty sx={{
                        fontFamily: 'Titillium Web, sans-serif',
                        borderRadius: '1.5rem',
                        height: '30px',
                        fontSize: '1.3rem'
                    }}>
                        <MenuItem value="" disabled>
                            Material
                        </MenuItem>
                        <MenuItem value="name" className={classes.options}>Name</MenuItem>
                        <MenuItem value="price" className={classes.options}>Price</MenuItem>
                        <MenuItem value="rating" className={classes.options}>Rating</MenuItem>
                    </Select>
                    <Select value="" displayEmpty sx={{
                        fontFamily: 'Titillium Web, sans-serif',
                        borderRadius: '1.5rem',
                        height: '30px',
                        fontSize: '1.3rem'
                    }}>
                        <MenuItem value="" disabled>
                            Offers
                        </MenuItem>
                        <MenuItem value="name" className={classes.options}>Name</MenuItem>
                        <MenuItem value="price" className={classes.options}>Price</MenuItem>
                        <MenuItem value="rating" className={classes.options}>Rating</MenuItem>
                    </Select>
                    <Select value="" displayEmpty sx={{
                        fontFamily: 'Titillium Web, sans-serif',
                        borderRadius: '1.5rem',
                        height: '30px',
                        fontSize: '1.3rem'
                    }}>
                        <MenuItem value="" disabled>
                            All Filters
                        </MenuItem>
                        <MenuItem value="name" className={classes.options}>Name</MenuItem>
                        <MenuItem value="price" className={classes.options}>Price</MenuItem>
                        <MenuItem value="rating" className={classes.options}>Rating</MenuItem>
                    </Select>
                </Box>
                <Box className={classes.box}>
                    <Select value="" displayEmpty sx={{
                        fontFamily: 'Titillium Web, sans-serif',
                        borderRadius: '1.5rem',
                        height: '30px',
                        fontSize: '1.3rem'
                    }}>
                        <MenuItem value="" disabled>
                            Sort By
                        </MenuItem>
                        <MenuItem value="name" className={classes.options}>Name</MenuItem>
                        <MenuItem value="price" className={classes.options}>Price</MenuItem>
                        <MenuItem value="rating" className={classes.options}>Rating</MenuItem>
                    </Select>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Options;
