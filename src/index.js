import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App section='head'/>
  </React.StrictMode>,
  document.getElementById('root')
);

let root = document.querySelector('#root')
let links = document.querySelectorAll('nav>a')

function transition(page) {
  ReactDOM.unmountComponentAtNode(root)
  ReactDOM.render(<App section={page}/>,root)
  links = document.querySelectorAll('nav>a')
  links.forEach(link => {
    link.addEventListener('click',() => transition(link.dataset.section))
  }) 
}

links.forEach(link => {
  link.addEventListener('click',() => transition(link.dataset.section))
})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
