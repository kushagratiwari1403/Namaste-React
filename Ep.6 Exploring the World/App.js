import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";


// Food Ordering App Structure:

// Header 
//  - Logo
//  - Nav-Items
// Body
//  - Search
//  - Restaurant Cards
// Footer
//  - Copyright Disclaimer



const App = () => {
    return (
        <div>
            <Header />
            <Body />
            <Footer />

        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
