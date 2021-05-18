import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import jwtDecode  from "jwt-decode";
import AppBar from '../components/AppBar/AppBar.js';
import Footer from '../components/Footer/Footer.js';
import Profile from '../components/Profile/Profile.js';
import ProductList from '../components/ProductList/ProductList.js';
import SignInSide from '../components/SignInSide/SignInSide.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import ProductsDetailView from '../components/ProductsDetailPage/ProductsDetailView';
import OrderList from '../components/OrderList/OrderList'
import OrderDetails from '../components/OrderDetails/OrderDetails'

class App extends Component {
  state = {}

  componentDidMount() {
    const jwt = localStorage.getItem('token')
    try{
      const user = jwtDecode(jwt);
      this.setState({user: user})
    } catch {}
  }

  render() {
    const user = this.state.user;
    return (
      <div >
          <CssBaseline />
          <AppBar user={user} />
          <Switch>
            <Route path="/profile" render = { props => {
                if (!user){
                  return <Redirect to="/login" />
                } else {
                  return <Profile {...props} user={user} />
                }
              }}
            />
        
       
            <Route exact={true} path="/productDetails" component={ProductsDetailView} />
            <Route exact={true} path="/productList" component={ProductList} />
            <Route exact={true} path="/orderDetails" component={OrderDetails}/>
            <Route exact={true} path="/orderList" component={OrderList} />
            <SignInSide />
          </Switch>
          <Footer />
      </div>
    );
  }
}
export default App;