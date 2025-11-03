/*

<div id="Parent">
  <div id="Children">
    <h1> Hi I'am H1 </h1>
  </div>
</div>  

*/



const heading = React.createElement("h1", { id: "Heading" }, "Hello World from React!!");

const parent = React.createElement("div", { id: "Parent" }, [
    React.createElement("div", { id: "Children 1"}, [
         React.createElement("h1", {}, "Hi I'am an H1 Tag."),
         React.createElement("h2", {}, "Hi I'am an H2 Tag.")
    ]
       ),
       React.createElement("div", { id: "Children 2"}, [
         React.createElement("h1", {}, "Hi I'am an H3 Tag."),
         React.createElement("h2", {}, "Hi I'am an H4 Tag.")
    ]
       )
]);
        

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);

// console.log(heading); => this is an object

