import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminRoute from './Components/AdminRoute/AdminRoute';
import Booking from './Components/Booking/Booking';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import MakeAdmin from './Components/makeAdmin/MakeAdmin';
import ManageOrder from './Components/ManageOrder/ManageOrder';
import ManageServices from './Components/ManageServices/ManageServices';
import AddServices from './Components/AddServices/AddServices';
import MyOrders from './Components/MyOrders/MyOrders';
import Navbar from './Components/Navbar/Navbar'
import Payment from './Components/Payment/Payment';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import Review from './Components/Review/Review';
import Services from './Components/Services/Services';
import AuthProvider from './Context/AuthProvider';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
const App = () => {
  return (
    <div className="">

      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute exact path="/review">
              <Review></Review>
            </PrivateRoute>
            <PrivateRoute exact path="/pay">
              <Payment></Payment>
            </PrivateRoute>
            <PrivateRoute exact path="/booking/:_id">
              <Booking></Booking>
            </PrivateRoute>
            <AdminRoute path="/admin">
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path="/manageorder">
              <ManageOrder></ManageOrder>
            </AdminRoute>
            <AdminRoute path="/manageservices">
              <ManageServices></ManageServices>
            </AdminRoute>
            <AdminRoute path="/addservices">
              <AddServices></AddServices>
            </AdminRoute>
            <PrivateRoute exact path="/orders" >
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
};

export default App;