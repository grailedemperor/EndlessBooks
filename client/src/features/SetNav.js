import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from "./Nav";
import NavBar from "../components/Navbar";
import App from '../App';

const SetNav = (props) => {

    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) { 
        return <NavBar />; 
    } return <Nav />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// Try changing to isLoggedIn={true}:
root.render(<App isLoggedIn={false} />);

export default SetNav;