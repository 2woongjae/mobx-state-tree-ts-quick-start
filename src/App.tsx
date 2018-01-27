import * as React from 'react';
import './App.css';
import { IUserStore, IUser } from './models/users';
import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';

const logo = require('./logo.svg');

interface AppProps {
  store: IUserStore;
}

@observer
class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{JSON.stringify(this.props.store.allUsers)}</p>
        <button onClick={this.click}>나이 먹어라</button>
      </div>
    );
  }

  @autobind
  click() {
    (this.props.store.users[0] as IUser).plusAge();
  }
}

export default App;
