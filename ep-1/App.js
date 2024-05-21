
const parent = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child1"},
        [React.createElement(
            "h1",
            {},
            "This is first h1 tag in c1"
        ),
        React.createElement(
            "h1",
            {},
            "This is second h1 tag in c1"
        )]
    ),
    React.createElement(
        "div",
        {id:"child2"},
        [React.createElement(
            "h2",
            {},
            "This is first h1 tag in c2 "
        ),
        React.createElement(
            "h2",
            {},
            "This is second h1 tag in c2 "
        )]
    )] 
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
