



const  P = React.createElement("div",{id : "p"},[
    React.createElement("div",{id:"c"},[
      React.createElement("h1" ,{}, "helllo h1"),
      React.createElement("h2" ,{}, "helllo h1"),

    ]),
    React.createElement("div",{id:"c2"},[
        React.createElement("h1" ,{}, "helllo h1"),
        React.createElement("h2" ,{}, "helllo h1"),

      ]),
]);
console.log(P);
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(P);