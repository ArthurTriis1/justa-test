import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes/>
            <GlobalStyle/>
        </BrowserRouter>
    );
}

export default App;
