import React, { Component, Fragment, lazy, Suspense } from 'react';
import Navigation from './views/nav-bar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserProvider, defaultUserState } from './components/contexts/user-context';
import AuthorizedRoute from './components/authorized-route'
import Logout from './views/logout';
import ClaimDetails from './views/claim-details'
import Visit from './views/create-visit'
import Search from './components/search';
import NotFound from "./components/not-found"
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
                  <Route path="/search" component={Search}/>
                  <Route path="/register" component={Register} />
                  <Route path="/createvisit:id" component={Visit} />
                  <Route path="/" exact={true} component={Home} />
                  <Route path="/login" component={Login} />
                  <AuthorizedRoute path="/claimdetails:id" component={ClaimDetails} allowedRoles={['admin']}/>
                  <AuthorizedRoute path="/logout" component={Logout}/>
                  <AuthorizedRoute path="/createnewclaim" component={CreateNewClaim} allowedRoles={['user']}/>
                  <Route component={NotFound}/>
                  
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
