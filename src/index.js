import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CookiesProvider } from 'react-cookie';

export default function Root() {
    return (
        <CookiesProvider>
            <App />
        </CookiesProvider>
    );
}



ReactDOM.render(<Root />, document.getElementById('root'));
