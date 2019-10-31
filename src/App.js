import React from 'react';
import './App.css';
import Tchat from './component/Tchat';
import Login from './component/Login';

//import { Provider } from 'react-redux'
import reducers from './reducers/message'
import { createStore } from 'redux'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//Brancher le provider Redux et le store
let store = createStore(reducers)

/**acces au store redux */
function App() {
  return (
    <div >
      <nav>
        <link to = "/">login</link>
        <link to = "/tchat">Tchat</link>
      </nav>
      <switch>
        <Route path="/" exact> <Login /></Route>
        <Route path="/tchat" > <Tchat /></Route>
      </switch>  
    </div>
  );
}
export default App;
