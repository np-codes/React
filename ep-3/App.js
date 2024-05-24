import React from 'react';
import ReactDOM from 'react-dom/client';

// When you use parentheses () you can ignore return but ehrn you use curly braces{} you need to use return

const element = (
    <span id='ele'>/// Injecting Element ///</span>
);

// when you use {} use return inside
const Jsxheading = function () {
    return (
        <div>
    <h1 id='Jsx' className='class1'>
        This is Jsxheading {element} component
    </h1>
    </div>
    )
};

// () do not need returns because they do it implicitly
// check out 3 different ways of rendering components
const Headingcomponent = () => (
    <div id='head'>
        {Jsxheading()}
        <Jsxheading></Jsxheading>
        <h1>This is Heading component</h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headingcomponent/>);


