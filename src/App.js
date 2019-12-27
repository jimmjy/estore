import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-signup/sign-in-and-signup.component";
import HomePage from "./pages/homepage/hompage.component";
import ShopPage from "./pages/shop/shop.component";

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  };

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if ( userAuth ) {

        const userRef = await createUserProfileDocument( userAuth );
        userRef.onSnapshot( snapShot => {
          this.setState( {
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          } );

          console.log( this.state );
        } );
      };

      this.setState( {
        currentUser: userAuth
      } );
    } );
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  };

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  };
};

export default App;
