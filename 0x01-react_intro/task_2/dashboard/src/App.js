import logo from './holberton-logo.jpg';
import './App.css';
import {getFullYear, getFooterCopy} from './utils';

function App() {
  return (
    <div className='App'>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form action='#' method='post'>
          <label htmlFor="email">Email
            <input type='email' name='email' />
          </label>
          <label htmlFor="password">password
            <input type="password" name='password' />
          </label>
          <button>OK</button>
        </form>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p>
      </div>
    </div>
  );
}

export default App;
