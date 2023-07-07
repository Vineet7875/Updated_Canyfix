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
import Phone from '@mui/icons-material/Phone';

const Signup = () => {
    const navigate = useNavigate();
    const [isCardFlipped, setIsCardFlipped] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [loginForm, setLoginForm] = useState({
        phoneNumber: '',
        password: '',
        confirmPassword: '',
    });

    const [signupForm, setSignupForm] = useState({
        username: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({
        phoneNumberLogin: '',
        phoneNumberSignup: '',
        passwordLogin: '',
        passwordSignup: '',
        confirmPasswordLogin: '',
        confirmPasswordSignup: '',
    });

    const [loginErrorMessage, setLoginErrorMessage] = useState('');
    const [signupErrorMessage, setSignupErrorMessage] = useState('');

    const handleCardFlip = () => {
        setIsCardFlipped(!isCardFlipped);
    };

    const handleInputChange = (form, field, value) => {
        form === 'login'
            ? setLoginForm({ ...loginForm, [field]: value })
            : setSignupForm({ ...signupForm, [field]: value });
    };

    const handlePasswordVisibility = (form) => {
        form === 'login'
            ? setLoginForm({ ...loginForm, showPassword: !loginForm.showPassword })
            : setSignupForm({ ...signupForm, showPassword: !signupForm.showPassword });
    };

    const handleFormSubmit = (form) => {
        const formData = form === 'login' ? loginForm : signupForm;
        const formErrors = validateForm(formData, form);

        if (Object.keys(formErrors).length === 0) {
            form === 'login' ? navigate('/') : navigate('/');
        } else {
            setErrors(formErrors);
            setErrorMessage('Please fill in all fields.');
        }
    };

    const validateForm = (formData, form) => {
        const errors = {};

        if (!/^\d{10}$/.test(formData.phoneNumber)) {
            errors[`${form}PhoneNumber`] = (
                <span style={{ fontFamily: 'ui-serif' }}>Phone number must contain exactly 10 digits</span>
            );
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
        if (!passwordRegex.test(formData.password)) {
            errors[`${form}Password`] = <span style={{ fontFamily: 'ui-serif' }}>Weak Password</span>;
        }

        if (formData.password !== formData.confirmPassword) {
            errors[`${form}ConfirmPassword`] = (
                <span style={{ fontFamily: 'ui-serif' }}>Passwords do not match</span>
            );
        }

        return errors;
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <Container style={{ maxWidth: 700 }}>
                <ReactCardFlip isFlipped={isCardFlipped} flipDirection="vertical">
                    <Card className="card" style={{ marginTop: '12vh' }}>
                        <CardContent>
                            <Typography variant="h5" component="h2" gutterBottom>
                                Log in
                            </Typography>
                            <form>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Phone Number"
                                            variant="outlined"
                                            fullWidth
                                            value={loginForm.phoneNumber}
                                            onChange={(e) => handleInputChange('login', 'phoneNumber', e.target.value)}
                                            error={!!errors.phoneNumberLogin}
                                            helperText={errors.phoneNumberLogin}
                                            InputProps={{
                                                startAdornment: (
                                                    <IconButton disabled>
                                                        <Phone />
                                                    </IconButton>
                                                ),
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Password"
                                            variant="outlined"
                                            fullWidth
                                            type={loginForm.showPassword ? 'text' : 'password'}
                                            value={loginForm.password}
                                            onChange={(e) => handleInputChange('login', 'password', e.target.value)}
                                            error={!!errors.passwordLogin}
                                            helperText={errors.passwordLogin}
                                            InputProps={{
                                                startAdornment: (
                                                    <IconButton disabled>
                                                        <Visibility />
                                                    </IconButton>
                                                ),
                                                endAdornment: (
                                                    <IconButton onClick={() => handlePasswordVisibility('login')}>
                                                        {loginForm.showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                ),
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            onClick={() => handleFormSubmit('login')}
                                        >
                                            Log in
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                            {loginErrorMessage && (
                                <Typography variant="body2" color="error" align="center" gutterBottom>
                                    {loginErrorMessage}
                                </Typography>
                            )}
                            <Typography variant="body2" align="center">
                                Don't have an account?{' '}
                                <span className="card-link" onClick={handleCardFlip}>
                                    Sign up
                                </span>
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card className="card" style={{ marginTop: '12vh' }}>
                        <CardContent>
                            <Typography variant="h5" component="h2" gutterBottom>
                                Sign up
                            </Typography>
                            <form>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Username"
                                            variant="outlined"
                                            fullWidth
                                            value={signupForm.username}
                                            onChange={(e) => handleInputChange('signup', 'username', e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Phone Number"
                                            variant="outlined"
                                            fullWidth
                                            value={signupForm.phoneNumber}
                                            onChange={(e) => handleInputChange('signup', 'phoneNumber', e.target.value)}
                                            error={!!errors.phoneNumberSignup}
                                            helperText={errors.phoneNumberSignup}
                                            InputProps={{
                                                startAdornment: (
                                                    <IconButton disabled>
                                                        <Phone />
                                                    </IconButton>
                                                ),
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Password"
                                            variant="outlined"
                                            fullWidth
                                            type={signupForm.showPassword ? 'text' : 'password'}
                                            value={signupForm.password}
                                            onChange={(e) => handleInputChange('signup', 'password', e.target.value)}
                                            error={!!errors.passwordSignup}
                                            helperText={errors.passwordSignup}
                                            InputProps={{
                                                startAdornment: (
                                                    <IconButton disabled>
                                                        <Visibility />
                                                    </IconButton>
                                                ),
                                                endAdornment: (
                                                    <IconButton onClick={() =>

                                                        handlePasswordVisibility('signup')}>
                                                        {signupForm.showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                ),
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            onClick={() => handleFormSubmit('signup')}
                                        >
                                            Sign up
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                            {signupErrorMessage && (
                                <Typography variant="body2" color="error" align="center" gutterBottom>
                                    {signupErrorMessage}
                                </Typography>
                            )}
                            <Typography variant="body2" align="center">
                                Already have an account?{' '}
                                <span className="card-link" onClick={handleCardFlip}>
                                    Log in
                                </span>
                            </Typography>
                        </CardContent>
                    </Card>
                </ReactCardFlip>
            </Container>
        </div>
    );
}
export default Signup;
