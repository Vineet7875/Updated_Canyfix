import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { useNavigate } from 'react-router-dom';
import {
    Card,
    CardContent,
    Grid,
    Typography,
    TextField,
    Checkbox,
    Button,
    IconButton,
    Container,
} from '@material-ui/core';
import { AccountCircle, Mail, Visibility, VisibilityOff } from '@material-ui/icons';
import Phone from '@mui/icons-material/Phone'

const Login = () => {
    const navigate = useNavigate();
    const [Username, setUsername] = useState('');
    const [showPasswordLogin, setShowPasswordLogin] = useState(false);
    const [showConfirmPasswordLogin, setShowConfirmPasswordLogin] = useState(false);
    const [showPasswordSignup, setShowPasswordSignup] = useState(false);
    const [showConfirmPasswordSignup, setShowConfirmPasswordSignup] = useState(false);
    const [isCardFlipped, setIsCardFlipped] = useState(false);
    const [phoneNumberLogin, setPhoneNumberLogin] = useState('');
    const [phoneNumberSignup, setPhoneNumberSignup] = useState('');
    const [phoneNumberErrorLogin, setPhoneNumberErrorLogin] = useState('');
    const [phoneNumberErrorSignup, setPhoneNumberErrorSignup] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [passwordSignup, setPasswordSignup] = useState('');
    const [passwordErrorLogin, setPasswordErrorLogin] = useState('');
    const [passwordErrorSignup, setPasswordErrorSignup] = useState('');
    const [confirmPasswordLogin, setConfirmPasswordLogin] = useState('');
    const [confirmPasswordErrorLogin, setConfirmPasswordErrorLogin] = useState('');
    const [confirmPasswordSignup, setConfirmPasswordSignup] = useState('');
    const [confirmPasswordErrorSignup, setConfirmPasswordErrorSignup] = useState('');
    const [loginErrorMessage, setLoginErrorMessage] = useState('');
    const [signupErrorMessage, setSignupErrorMessage] = useState('');
    const [isLoginFormComplete, setIsLoginFormComplete] = useState(true);
    const [isSignupFormComplete, setIsSignupFormComplete] = useState(true);



    const handlePasswordVisibilityLogin = () => {
        setShowPasswordLogin(!showPasswordLogin);
    };

    const handleConfirmPasswordVisibilityLogin = () => {
        setShowConfirmPasswordLogin(!showConfirmPasswordLogin);
    };

    const handlePasswordVisibilitySignup = () => {
        setShowPasswordSignup(!showPasswordSignup);
    };

    const handleConfirmPasswordVisibilitySignup = () => {
        setShowConfirmPasswordSignup(!showConfirmPasswordSignup);
    };

    const handleBelowSignupButtonClick = () => {
        setIsCardFlipped(!isCardFlipped);
    };
    const handleBelowLoginButtonClick = () => {
        setIsCardFlipped(!isCardFlipped);
    };

    const handleSignupButtonClick = () => {
        if (Username && phoneNumberSignup && passwordSignup && confirmPasswordSignup) {
            setIsSignupFormComplete(true);
            navigate('/');
        } else {
            setIsSignupFormComplete(false);
            setSignupErrorMessage('Please fill the all fields.');
        }
    };

    const handleLoginButtonClick = () => {
        if (phoneNumberLogin && passwordLogin && confirmPasswordLogin) {
            setIsLoginFormComplete(true);
            navigate('/');
        } else {
            setIsLoginFormComplete(false);
            setLoginErrorMessage('Please fill the all fields.');
        }
    };

    const validateLoginPhoneNumber = (value) => {
        if (!/^\d{10}$/.test(value)) {
            setPhoneNumberErrorLogin(
                <span style={{ fontFamily: 'ui-serif' }}>Phone number must contain exactly 10 digits</span>
            );
            return false;
        }
        setPhoneNumberErrorLogin('');
        return true;
    };

    const validateSignupPhoneNumber = (value) => {
        if (!/^\d{10}$/.test(value)) {
            setPhoneNumberErrorSignup(
                <span style={{ fontFamily: 'ui-serif' }}>Phone number must contain exactly 10 digits</span>
            );
            return false;
        }
        setPhoneNumberErrorSignup('');
        return true;
    };

    const handleSignupPhoneNumberChange = (event) => {
        const value = event.target.value;
        setPhoneNumberSignup(value);
        validateSignupPhoneNumber(value);
    };

    const handleLoginPhoneNumberChange = (event) => {
        const value = event.target.value;
        setPhoneNumberLogin(value);
        validateLoginPhoneNumber(value);
    };

    // const handleLoginPhoneNumberBlur = () => {
    //     validateLoginPhoneNumber(phoneNumberLogin);
    // };

    // const handleSignupPhoneNumberBlur = () => {
    //     validateSignupPhoneNumber(phoneNumberSignup);
    // };

    const validateLoginPassword = (value) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;

        if (!passwordRegex.test(value)) {
            setPasswordErrorLogin(
                <span style={{ fontFamily: 'ui-serif' }}>Weak Password</span>
            );
        } else {
            setPasswordErrorLogin('');
        }
    };

    const validateSignupPassword = (value) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;

        if (!passwordRegex.test(value)) {
            setPasswordErrorSignup(
                <span style={{ fontFamily: 'ui-serif' }}>Weak Password</span>
            );
        } else {
            setPasswordErrorSignup('');
        }
    };


    const handleLoginChangePassword = (event) => {
        const { value } = event.target;
        setPasswordLogin(value);
        validateLoginPassword(value);
    };

    const handleSignupChangePassword = (event) => {
        const { value } = event.target;
        setPasswordSignup(value);
        validateSignupPassword(value);
    };


    const handleLoginConfirmPasswordChange = (event) => {
        const { value } = event.target;
        setConfirmPasswordLogin(value);
        validateLoginConfirmPassword(value);
    };

    const handleLoginConfirmPasswordBlur = () => {
        validateLoginConfirmPassword(confirmPasswordLogin);
    };

    const validateLoginConfirmPassword = (value) => {
        if (value !== passwordLogin) {
            setConfirmPasswordErrorLogin(
                <span style={{ fontFamily: 'ui-serif' }}>Passwords Not Match</span>
            );
            return false;
        }
        setConfirmPasswordErrorLogin('');
        return true;
    };

    const handleSignupConfirmPasswordChange = (event) => {
        const { value } = event.target;
        setConfirmPasswordSignup(value);
        validateSignupConfirmPassword(value);
    };

    const handleSignupConfirmPasswordBlur = () => {
        validateSignupConfirmPassword(confirmPasswordSignup);
    };

    const validateSignupConfirmPassword = (value) => {
        if (value !== passwordSignup) {
            setConfirmPasswordErrorSignup(
                <span style={{ fontFamily: 'ui-serif' }}>Passwords Not Match</span>
            );
            return false;
        }
        setConfirmPasswordErrorSignup('');
        return true;
    };

    const handleUsernameChange = (event) => {
        const value = event.target.value;
        setUsername(value);

    };


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <Container style={{ maxWidth: 700 }}>
                <ReactCardFlip isFlipped={isCardFlipped} flipDirection="vertical">

                    <Card className="card" style={{ marginTop: '12vh' }}>
                        <CardContent>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6} style={{ backgroundColor: '#3f51b5' }}>
                                    <img src="/path/to/image.jpg" alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
                                </Grid>
                                <Grid item xs={12} sm={6} style={{ padding: '4rem' }}>
                                    <Typography variant="h4" style={{ marginBottom: '1rem', fontFamily: 'ui-serif', fontSize: '3rem', textAlign: 'center' }}>
                                        Hello Again!
                                    </Typography>
                                    <Typography variant="body1" style={{ marginBottom: '1rem', fontFamily: 'ui-serif', fontSize: '1.3rem', textAlign: 'center' }}>
                                        Some text goes here.
                                    </Typography>
                                    <Grid container alignItems="center">
                                        <Grid item xs={12}>
                                            <TextField
                                                id="phone"
                                                label="Phone Number"
                                                type="tel"
                                                fullWidth
                                                margin="normal"
                                                value={phoneNumberLogin}
                                                onChange={handleLoginPhoneNumberChange}
                                                // onBlur={handleLoginPhoneNumberBlur}
                                                error={phoneNumberErrorLogin !== ''}
                                                helperText={phoneNumberErrorLogin}
                                                InputProps={{
                                                    endAdornment: <Phone style={{ fontSize: '2rem', fontFamily: 'ui-serif', color: 'gray' }} />,
                                                    style: { fontFamily: 'ui-serif', fontSize: '1.3rem' },
                                                }}
                                                InputLabelProps={{ style: { fontFamily: 'ui-serif', fontSize: '1.8rem' } }}

                                            />

                                        </Grid>
                                    </Grid>
                                    <TextField
                                        id="password"
                                        label="Password"
                                        type={showPasswordLogin ? 'text' : 'password'}
                                        fullWidth
                                        margin="normal"
                                        value={passwordLogin}
                                        onChange={handleLoginChangePassword}
                                        helperText={passwordErrorLogin}
                                        error={!!passwordErrorLogin}
                                        InputProps={{
                                            endAdornment: (
                                                <IconButton onClick={handlePasswordVisibilityLogin} edge="end">
                                                    {showPasswordLogin ? (
                                                        <VisibilityOff style={{ fontSize: '1.8rem' }} />
                                                    ) : (
                                                        <Visibility style={{ fontSize: '1.8rem' }} />
                                                    )}
                                                </IconButton>
                                            ),
                                            style: { fontFamily: 'ui-serif', fontSize: '1.5rem' },
                                        }}
                                        InputLabelProps={{ style: { fontFamily: 'ui-serif', fontSize: '1.8rem' } }}
                                    />
                                    <TextField
                                        id="confirmPassword"
                                        label="Confirm Password"
                                        type={showConfirmPasswordLogin ? 'text' : 'password'}
                                        fullWidth
                                        margin="normal"
                                        value={confirmPasswordLogin}
                                        onChange={handleLoginConfirmPasswordChange}
                                        onBlur={handleLoginConfirmPasswordBlur}
                                        error={confirmPasswordErrorLogin !== ''}
                                        helperText={confirmPasswordErrorLogin}
                                        InputProps={{
                                            endAdornment: (
                                                <IconButton onClick={handleConfirmPasswordVisibilityLogin} edge="end">
                                                    {showConfirmPasswordLogin ? (
                                                        <VisibilityOff style={{ fontSize: '1.8rem' }} />
                                                    ) : (
                                                        <Visibility style={{ fontSize: '1.8rem' }} />
                                                    )}
                                                </IconButton>
                                            ),
                                            style: { fontFamily: 'ui-serif', fontSize: '1.5rem' },
                                        }}
                                        InputLabelProps={{ style: { fontFamily: 'ui-serif', fontSize: '1.8rem' } }}
                                    />

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Checkbox color="primary" style={{ fontSize: '1.1rem' }} />
                                            <Typography variant="body2" style={{ fontFamily: 'ui-serif', fontSize: '1.1rem' }}>
                                                Remember me
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography variant="body2" style={{ fontFamily: 'ui-serif', fontSize: '1.1rem' }}>
                                                Recovery password
                                            </Typography>
                                        </div>
                                    </div>
                                    {!isLoginFormComplete && (
                                        <Typography variant="body2" style={{ fontFamily: 'ui-serif', fontSize: '1.1rem', color: 'red', textAlign: 'center', marginBottom: '1rem' }}>
                                            {loginErrorMessage}
                                        </Typography>
                                    )}
                                    <Button variant="contained" color="primary" fullWidth style={{ fontSize: '1.3rem', height: '3.5rem' }} onClick={handleLoginButtonClick}>
                                        Login
                                    </Button>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }}>

                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }}>
                                        <Typography variant="body2" style={{ fontFamily: 'ui-serif', fontSize: '1.2rem' }}>
                                            Don't have an account?
                                        </Typography>
                                        <Button onClick={handleBelowSignupButtonClick} variant="text" color="primary" style={{ fontFamily: 'ui-serif', fontSize: '1rem' }}>
                                            Sign up
                                        </Button>
                                    </div>

                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>


                    <Card className="card flipped" style={{ marginTop: '12vh' }}>
                        <CardContent>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6} style={{ backgroundColor: '#3f51b5' }}>
                                    <img src="/path/to/image.jpg" alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
                                </Grid>
                                <Grid item xs={12} sm={6} style={{ padding: '4rem' }}>
                                    <Typography variant="h4" style={{ marginBottom: '1rem', fontFamily: 'ui-serif', fontSize: '3rem', textAlign: 'center' }}>
                                        Hello Again!
                                    </Typography>
                                    <Typography variant="body1" style={{ marginBottom: '1rem', fontFamily: 'ui-serif', fontSize: '1.3rem', textAlign: 'center' }}>
                                        Some text goes here.
                                    </Typography>
                                    <Grid container alignItems="center">

                                        <Grid item xs={12} >
                                            <TextField
                                                id="username"
                                                label="Username"
                                                fullWidth
                                                margin="normal"
                                                value={Username}
                                                onChange={handleUsernameChange}
                                                InputProps={{
                                                    endAdornment: <AccountCircle style={{ fontSize: '2rem', fontFamily: 'ui-serif', color: 'gray' }} />,
                                                    style: { fontFamily: 'ui-serif', fontSize: '1.3rem' }
                                                }}
                                                InputLabelProps={{ style: { fontFamily: 'ui-serif', fontSize: '1.8rem' } }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                id="phone"
                                                label="Phone Number"
                                                type="tel"
                                                fullWidth
                                                margin="normal"
                                                value={phoneNumberSignup}
                                                onChange={handleSignupPhoneNumberChange}
                                                // onBlur={handleSignupPhoneNumberBlur}
                                                error={phoneNumberErrorSignup !== ''}
                                                helperText={phoneNumberErrorSignup}
                                                InputProps={{
                                                    endAdornment: <Phone style={{ fontSize: '2rem', fontFamily: 'ui-serif', color: 'gray' }} />,
                                                    style: { fontFamily: 'ui-serif', fontSize: '1.3rem' },
                                                }}
                                                InputLabelProps={{ style: { fontFamily: 'ui-serif', fontSize: '1.8rem' } }}
                                            />
                                        </Grid>

                                    </Grid>
                                    <TextField
                                        id="password"
                                        label="Password"
                                        type={showPasswordSignup ? 'text' : 'password'}
                                        fullWidth
                                        margin="normal"
                                        value={passwordSignup}
                                        onChange={handleSignupChangePassword}
                                        helperText={passwordErrorSignup}
                                        error={!!passwordErrorSignup}
                                        InputProps={{
                                            endAdornment: (
                                                <IconButton onClick={handlePasswordVisibilitySignup} edge="end">
                                                    {showPasswordSignup ? (
                                                        <VisibilityOff style={{ fontSize: '1.8rem' }} />
                                                    ) : (
                                                        <Visibility style={{ fontSize: '1.8rem' }} />
                                                    )}
                                                </IconButton>
                                            ),
                                            style: { fontFamily: 'ui-serif', fontSize: '1.5rem' },
                                        }}
                                        InputLabelProps={{ style: { fontFamily: 'ui-serif', fontSize: '1.8rem' } }}
                                    />
                                    <TextField
                                        id="confirmPassword"
                                        label="Confirm Password"
                                        type={showConfirmPasswordSignup ? 'text' : 'password'}
                                        fullWidth
                                        margin="normal"
                                        value={confirmPasswordSignup}
                                        onChange={handleSignupConfirmPasswordChange}
                                        onBlur={handleSignupConfirmPasswordBlur}
                                        error={confirmPasswordErrorSignup !== ''}
                                        helperText={confirmPasswordErrorSignup}
                                        InputProps={{
                                            endAdornment: (
                                                <IconButton onClick={handleConfirmPasswordVisibilitySignup} edge="end">
                                                    {showConfirmPasswordSignup ? (
                                                        <VisibilityOff style={{ fontSize: '1.8rem' }} />
                                                    ) : (
                                                        <Visibility style={{ fontSize: '1.8rem' }} />
                                                    )}
                                                </IconButton>
                                            ),
                                            style: { fontFamily: 'ui-serif', fontSize: '1.5rem' },
                                        }}
                                        InputLabelProps={{ style: { fontFamily: 'ui-serif', fontSize: '1.8rem' } }}
                                    />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Checkbox color="primary" style={{ fontSize: '1.1rem' }} />
                                            <Typography variant="body2" style={{ fontFamily: 'ui-serif', fontSize: '1.1rem' }}>
                                                Remember me
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography variant="body2" style={{ fontFamily: 'ui-serif', fontSize: '1.1rem' }}>
                                                Recovery password
                                            </Typography>
                                        </div>
                                    </div>
                                    {!isSignupFormComplete && (
                                        <Typography variant="body2" style={{ fontFamily: 'ui-serif', fontSize: '1.1rem', color: 'red', textAlign: 'center', marginBottom: '1rem' }}>
                                            {signupErrorMessage}
                                        </Typography>
                                    )}
                                    <Button variant="contained" color="primary" fullWidth style={{ fontSize: '1.3rem', height: '3.5rem' }} onClick={handleSignupButtonClick}>
                                        Signup
                                    </Button>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }}>

                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }}>
                                        <Typography variant="body2" style={{ fontFamily: 'ui-serif', fontSize: '1.2rem' }}>
                                            Have an account?
                                        </Typography>
                                        <Button onClick={handleBelowLoginButtonClick} variant="text" color="primary" style={{ fontFamily: 'ui-serif', fontSize: '1rem' }}>
                                            Sign in
                                        </Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </ReactCardFlip>
            </Container>
        </div>
    );
};

export default Login;







