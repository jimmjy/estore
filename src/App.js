import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-signup/sign-in-and-signup.component";
import HomePage from "./pages/homepage/hompage.component";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
