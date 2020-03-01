import React, {useContext} from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import HomeScreen1 from "./Frontend/HomeScreen1";
import LandingPage from "./Frontend/LandingPage";
import {Auth0Context} from "./contexts/auth0-context";

function App() {
    const auth0 = useContext(Auth0Context);
    return (
        <Router>
            <div className="App">
                <Route exact path="/" render={() => {return <LandingPage/>}}/>
                <Route path="/homescreen" render={() => {return (!auth0.isAuthenticated ? <LandingPage/> : <HomeScreen1/>)}}/>
            </div>
        </Router>
    )}

export default App;

