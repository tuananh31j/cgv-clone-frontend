import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GlobalStyles from './components/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { getMeAsyncThunk } from './store/Slices/AuthSlice.ts';
import { CookiesProvider } from 'react-cookie';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.tsx';
store.dispatch(getMeAsyncThunk());
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <CookiesProvider defaultSetOptions={{ path: '/' }}>
                    <ScrollToTop>
                        <GlobalStyles>
                            <App />
                        </GlobalStyles>
                    </ScrollToTop>
                </CookiesProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
