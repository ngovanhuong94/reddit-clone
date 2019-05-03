import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

// store
import store from './store'

// theme
import theme from './theme'
// header
import Header from './containers/Header'

// pages
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import CreatePost from './pages/CreatePost'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <>
              <Header />
              <Switch>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/create-post" component={CreatePost}/>
                <Route path="/" component={Home} />
              </Switch>
            </>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
