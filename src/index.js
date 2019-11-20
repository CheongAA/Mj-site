import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import dotenv from 'dotenv';
import { CookiesProvider } from 'react-cookie';

dotenv.config();

export default function Root() {
    return (
        <CookiesProvider>
            <App />
        </CookiesProvider>
    );
}



ReactDOM.render(<Root />, document.getElementById('root'));
