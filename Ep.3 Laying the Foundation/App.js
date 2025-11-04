import React from "react";
import ReactDOM from "react-dom/client";

console.log("Kushagra");

//React Element
const jsxHeading = (<div>
    <h1 id="heading" className="jsxheading">Namaste React from JSX!</h1>
    <div>
        <h2 className="linetwo"> Second line of this page is here only by bash.</h2>
    </div> sdfs
</div>);

//React Functional Component
const JSXHeading = function(){
    return <h1> Hi I am made from functional component. (function expression) </h1>
};

//Component Composition
const Title = function(){
    return <h1>Hi I am the title for Component Composition</h1>
};

const SubText = ()=>{
    return (
        <div id="container">
        <Title/>
        <h4>I am the sub SubText.</h4>
    </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<JSXHeading/>); 
root.render(<SubText/>); 


// console.log(heading); => this is an object
// Intro to JSX, now we will use JSX to write HTML inside our JS file.
