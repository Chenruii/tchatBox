import React from 'react';
import './App.css';
import Tchat from './component/Tchat';

import { Provider } from 'react-redux'
import reducers from './reducers/message'
import { createStore } from 'redux'

//Brancher le provider Redux et le store
let store = createStore(reducers)

/**acces au store redux */
function App() {
  return (
    <div className="App">
      
      <Provider store={store}>
         <Tchat />
      </Provider>
  
    </div>
  );
}
export default App;
