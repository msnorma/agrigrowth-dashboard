import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Device from './pages/device';
import Order from './pages/order';
import Resource from './pages/resource';
import UserProvider from "./provider/userProvider";
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard';
import './App.css';

export const AuthContext = React.createContext(null);

const App = withRouter(({location})=> {
  // const [showSidebar,setShowSidebar] = React.useState();

  // const handleToggleSideBar = () => {
  //   setShowSidebar(!showSidebar);
  // }

  return(
    <UserProvider>
      <div className="App">
        {/* <Sidebar/> */}
        {
          (location.pathname !== '/login' && location.pathname !== '/' ) && <Sidebar/>
        }
        <Switch>
          <div>
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/orders" component={Order} />
            <Route path="/devices" component={Device} />
            <Route path="/resources" component={Resource} />
          </div>
        </Switch>
      </div>
    </UserProvider>
  )
})
export default App;
