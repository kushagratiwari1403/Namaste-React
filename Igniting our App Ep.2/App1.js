import React from "react";
import ReactDOM from "react-dom/client"

console.log("Kushagra");

const heading = React.createElement("h1", { id: "Heading" }, "Hello World from React!!");

const parent = React.createElement("div", { id: "Parent" }, [
  React.createElement("div", { key: "child1", id: "Children 1" }, [
    React.createElement("h1", { key: "h1a" }, "Hi I'am Kushagra."),
    React.createElement("h2", { key: "h2a" }, "My full name is Kushagra Tiwari")
  ]),
  React.createElement("div", { key: "child2", id: "Children 2" }, [
    React.createElement("h1", { key: "h1b" }, "Hey learning React from Namaste React"),
    React.createElement("h5", { key: "h2b" }, "Hi I'am an another H5 Tag.")
  ])
]);




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);

// console.log(heading); => this is an object

