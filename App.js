// const heading = React.createElement(
//     'h1', 
//     {id: 'heading'}, 
//     'Hello, World! from React'
// );

// ReactElement(object) => HTML(Browser understands);

const parent = React.createElement(
    'div',
    {id: 'parent'},
    React.createElement(
        'div',
        {id: 'child'},
        [React.createElement('h1', {}, "I'm an h1 tag"), React.createElement('h2', {}, "I'm an h2 tag")]
    )
);

// console.log('heading', heading); // object

console.log('parent', parent);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
