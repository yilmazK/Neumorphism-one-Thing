import React, {useContext}from "react";
import { Auth0Context } from '../contexts/auth0-context';
import './LandingPagestyles.css'
import { useHistory } from "react-router-dom";
import HomeScreen from "./HomeScreen";

function LandingPage() {
    const auth0 = useContext(Auth0Context);
    console.log(auth0);

    return (
        <div>
            <div className="landingpage-background">
                <h1 className="landingpage-header">Hi 👋🏻 <br/> Welcome to one Big Thing </h1>
                <p className="landingpage-description">Set one big goal and three small goals that you want to achieve today</p>
                <button className="login-button" onClick={() => {auth0.loginWithRedirect()}}>Login</button>
            </div>
        </div>
    )}

export default LandingPage