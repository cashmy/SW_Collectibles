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
import addProducts from "../components/AddProducts/addProducts"
import RegistrationSide from "../components/RegistrationSide/RegistrationSide"
import AddressForm from "../components/CheckOut/AddressForm"
import PaymentForm from "../components/CheckOut/PaymentForm"
import Review from "../components/CheckOut/Review"
import CheckOut from "../components/CheckOut/CheckOut"
import shoppingCart from "../components/ShoppingCart/shoppingCart"
import Paper from '@material-ui/core/Paper';
import BackgroundImage from '../assets/images/wallpapersden.com_star-wars-skywalker-saga_3840x2400.jpg';

const styles = {
  paperContainer: {
    backgroundImage: `url(${BackgroundImage})`, 
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: "100vh"
  }
};

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
      <Paper style={styles.paperContainer} >
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
            <Route path="/address" component={AddressForm} />
            <Route path="/payment" component={PaymentForm} />
            <Route path="/review" component={Review} />
            <Route path="/checkOut" component={CheckOut} />
            <Route exact={true} path="/registration" component={RegistrationSide}/> 
            <Route path="/productDetails" component={ProductsDetailView} />
            <Route exact={true} path="/productList" component={ProductList} />
            <Route exact={true} path="/orderDetails" component={OrderDetails}/>
            <Route exact={true} path="/orderList" component={OrderList} />
            <Route exact={true} path="/addProducts" component={addProducts}/>
            <Route exact={true} path="/shoppingCart" component={shoppingCart} />
            <SignInSide />
          </Switch>
          <Footer />
      </Paper>
    );
  }
}
export default App;