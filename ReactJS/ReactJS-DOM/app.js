//React JS createElement

const h1 = React.createElement('h1',{
    tilte: 'hello',
    className: 'hello'
},'Hello world');

const ul = React.createElement(
    'ul',//Element
    null,//Props
    React.createElement('li', {}, 'Javascript'),//child
    React.createElement('li', {}, 'ReactJS')
)

//Get root element
var root = document.querySelector('#root');

//ReactDOM render
ReactDOM.render(h1, root);
