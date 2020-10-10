import React from 'react';
import logo from '../../logo.svg';
import './index.css';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}

const Index: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <GoogleLogin
          clientId="53639788496-dik41qe2mg3u8lkn084ru8coqu4ug84p.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </header>
    </div>
  );
};

export default Index;
