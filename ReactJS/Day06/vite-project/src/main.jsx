import React  from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Counter from './Counter.jsx'
import List from './List.jsx'
import Clock from './Clock.jsx'
// console.log(<h1>Hello World Technology</h1>);
// now create element with the vanilla javascript
// const element=document.createElement('h1');
// element.textContent="Hello World Technology";
// console.dir(element);
createRoot(document.getElementById('root')).render(
  <>
  <App/>
  <Counter/>
  <List/>
  <Clock/>
  </>
)
