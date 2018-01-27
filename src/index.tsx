import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import UserStore from './models/users';

const store = UserStore.create({
  users: [
    {
      name: 'Mark',
      age: 36
    }
  ]
});

ReactDOM.render(<App store={store} />, document.getElementById(
  'root'
) as HTMLElement);
registerServiceWorker();
