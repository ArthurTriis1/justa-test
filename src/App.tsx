import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop'

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <Header/>
            <Routes/>
            <GlobalStyle/>
        </BrowserRouter>
    );
}

export default App;
