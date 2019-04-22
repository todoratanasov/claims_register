import React, { Component, Fragment, lazy, Suspense } from 'react';
import Navigation from './views/nav-bar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const CreateNewClaim = lazy(()=>import('./views/create-new-claim'));
const Home = lazy(() => import('./views/home'));
const Register = lazy(()=>import('./views/register'));
const Login = lazy(() => import('./views/login'));



class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Navigation />
          <Suspense fallback={<div class="spinner-border text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div>}>
            <div class="d-flex justify-content-center">
              <Switch>
                <Route path="/register" component={Register}/>
                <Route path="/" exact={true} component={Home} />
                <Route path="/login" component={Login}/>
                <Route path="/createnewclaim" component={CreateNewClaim}/>
              </Switch>


            </div>
          </Suspense>
        </Router>
      </Fragment>
    );
  }
}

export default App;
