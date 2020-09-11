import React from 'react';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from './styles/global';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import {classicTheme} from './styles/themes/classic';

function App() {
  return (
      <ThemeProvider theme={classicTheme}>
      <BrowserRouter>
          <GlobalStyle/>
          <Switch>
              <Route path="/" component={Home} exact></Route>
          </Switch>
      </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
