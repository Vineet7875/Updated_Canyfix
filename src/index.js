import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Pages/Ecommerce/store';
// import rootReducer from './reducers'; // Import your root reducer
import LandingPage from './Routes/LandingPage';

ReactDOM.render(
    <Provider store={store}>
        <LandingPage />
    </Provider>,
    document.getElementById('root')
);
