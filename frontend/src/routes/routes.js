import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from "../App";
import {LoginPage} from "../pages/login/login-page";
import {RegisterPage} from "../pages/register/register-page";
import {UserProfilePage} from "../pages/userprofile/userprofile-page";
import {CreateRestaurantPage} from "../pages/create-restaurant-page/create-restaurant-page";
import {CreateReviewPage} from "../pages/create-review-page/index";
import {Searchbar} from "../components/search/search-review-second-header";
import {Home} from "../pages/home";
import {RestaurantPage} from "../pages/restaurant/restaurant-page";
import {Restaurant_cell} from "../components/homepage/restaurant-cell";
import {Login} from "../components/auth/login";
import WrapperComponent from "../HOC/AuthComponent"
import {SearchRestaurant} from "../pages/search/SearchRestaurantPage";


const Routes = () => {
    return (

        <Router>
            <Switch>

            <Route exact path={"/userprofile"} component={WrapperComponent(UserProfilePage)} />
            <Route exact path={"/login"} component={LoginPage}/>
            <Route exact path={"/register"} component={RegisterPage}/>
            <Route exact path={"/create-restaurant"} component={WrapperComponent(CreateRestaurantPage)}/>
            <Route exact path={"/create-review"} component={WrapperComponent(CreateReviewPage)}/>
            <Route exact path={"/"} component={Home}/>
            <Route excat path={"/search-restaurant"} component={SearchRestaurant}/>



            </Switch>
        </Router>
    );
}

  export default Routes;