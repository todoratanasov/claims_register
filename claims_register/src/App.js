import React, { Component, Fragment, lazy, Suspense } from 'react';
import Navigation from './views/nav-bar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserProvider, defaultUserState } from './components/contexts/user-context';
import AuthorizedRoute from './components/authorized-route'
import Logout from './views/logout';

const CreateNewClaim = lazy(() => import('./views/create-new-claim'));
const Home = lazy(() => import('./views/home'));
const Register = lazy(() => import('./views/register'));
const Login = lazy(() => import('./views/login'));



class App extends Component {
  constructor(props){
    super(props);
    const userFromStorage = window.localStorage.getItem('user')
    const parsedUser = userFromStorage ? JSON.parse(userFromStorage):{};
    this.state={
      user: {
        ...defaultUserState,
        ...parsedUser,
        updateUser:this.updateUser,
      }
    }
    this.updateUser = this.updateUser.bind(this);
  }

  updateUser = (user)=>{
    this.setState({
      user
    })
  }
  render() {
    const {user}=this.state;
    console.log(user)
    return (
      <Router>
        <Fragment>
          <UserProvider value={user}>
            <Navigation />
            <Suspense fallback={<div className="spinner-border text-secondary" role="status">
              <span className="sr-only">Loading...</span>
            </div>}>
              <div className="d-flex justify-content-center">
                <Switch>
                  <Route path="/register" component={Register} />
                  <Route path="/" exact={true} component={Home} />
                  <Route path="/login" component={Login} />
                  <AuthorizedRoute path="/logout" component={Logout}/>
                  <Route path="/createnewclaim" component={CreateNewClaim} />
                </Switch>
              </div>
            </Suspense>
          </UserProvider>
        </Fragment>
      </Router>
    );
  }
}

export default App;
