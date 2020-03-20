import React from 'react';
import './App.css';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { Provider } from 'react-redux';

// ROUTER ------------------------
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// PAGES -------------------------
import {Login, Areas} from './pages';

// REDUX INIT --------------------
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/about">
            {/* <About /> */}
          </Route>
          <Route path={["/main", "/main/:id"]}>
            <Areas />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;