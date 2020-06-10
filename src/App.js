import React , {Component}from 'react';
import './App.css';
import Main from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux'
// Provider is used to join the redux store to react
import {ConfigureStore} from './redux/configureStore'

const store = ConfigureStore();

class App extends Component {
  
  render(){
    return (
      <Provider store ={store}>  
        <BrowserRouter>
      <div className="App">
        <Main />
      </div>
      </BrowserRouter>
      </Provider>
      
      
    );
  }
  
}

export default App;
