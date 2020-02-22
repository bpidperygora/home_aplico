function createElement() {
  let app = document.createElement('div');
  app.style.backgroundColor = 'red';
  app.innerHTML =
    '<span>Hello world</span><br />This is just a text node<br /><div>Text content</div>';
  return app;
}

console.log('git work');

function render() {
  document.body.appendChild(createElement());
}

const React = {
  createElement,
  render,
};

const app = React.createElement(
  'div',
  { style: { backgroundColor: 'red' } },
  [
    React.createElement('span', undefined, 'Hello world'),
    React.createElement('br'),
    'This is just a text node',
    React.createElement('div', { textContent: 'Text content' }),
  ],
);

React.render(app, document.getElementById('app'));
