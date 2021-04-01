import React from 'react';

import './index.css';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './context/Modal';
import App from './App';

import configureStore from './store';
import { restoreCSRF, fetch } from './store/csrf';
import * as sessionActions from './store/session';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();

  window.csrfFetch = fetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

// const Carrot = () => (
//   <div style={{ color: "orange", fontSize: "100px" }}>
//     <i className="fas fa-carrot"></i>
//   </div>
// );

const theme = createMuiTheme({
  palette: {
    //purple
    primary:{
      main: "#252466",
    },
    //teal
    secondary:{ 
      main: "#4DCCBD"
    },
    //white
    background: {
      default: "fafafa"
    },
    //darkgrey and teal
    text :{
      primary: "#333333",
      secondary: "252466"
    }
  },
  typography: {
    fontFamily: [
      'Comfortaa',
      'cursive'
    ].join(','),
    body1:{
      fontFamily:[
      'Montserrat', 'sans-serif'
    ].join(',')
  }
  }
})

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <Provider store={store}>
          <BrowserRouter>
            <App />
            {/* <Carrot /> */}
          </BrowserRouter>
        </Provider>
      </ModalProvider>
    </ThemeProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
