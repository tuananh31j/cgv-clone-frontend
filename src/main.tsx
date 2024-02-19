import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GlobalStyles from './components/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
    // <React.StrictMode>
    <Provider store={store}>
        <GlobalStyles>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </GlobalStyles>
    </Provider>
    // </React.StrictMode>
);
