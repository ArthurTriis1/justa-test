import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop'

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes/>
            <Footer/>
            <GlobalStyle/>
            <ScrollToTop/>
        </BrowserRouter>
    );
}

export default App;
