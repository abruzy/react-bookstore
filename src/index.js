import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';
import randomId from './utils/randomId';

const INITIAL_STATE = {
  books: [
    { id: randomId(), title: 'Do androids dream of electric sheep?', category: 'Action' },
    { id: randomId(), title: 'Eveything I eve told you', category: 'Biography' },
    { id: randomId(), title: 'Are you there', category: 'History' },
    { id: randomId(), title: 'The devils wears', category: 'Horror' },
    { id: randomId(), title: 'The curious incident', category: 'Kids' },
    { id: randomId(), title: 'How to win friends', category: 'Learning' },
    { id: randomId(), title: 'Cloudy with a chance', category: 'Sci-Fi' },
  ],
};

const store = createStore(rootReducer, INITIAL_STATE);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
