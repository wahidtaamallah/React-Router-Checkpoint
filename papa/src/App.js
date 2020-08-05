import React from 'react';
import { Redirect , BrowserRouter , Route} from 'react-router-dom';
import Home from './components/Home'
import Category from './components/Category'
import Admin from './components/Admin'
import NavBar from './components/NavBar'
import Login, {fakeAuth} from './components/Login'
import Products from './components/Products'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route path="/category" component={Category} />
          <PrivateRoute path="/admin" component={Admin} />
          <Route path="/products" component={Products} />      
      </div>
      </BrowserRouter>
  );
}
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default App;
