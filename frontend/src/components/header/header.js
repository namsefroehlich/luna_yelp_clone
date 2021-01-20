import logo from "../../assets/svgs/logo2.svg"
import "../../sass/header/header.scss"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {logOutAction} from "../../actions/userLogoutAction";


export const Header = () => {

    const dispatch = useDispatch()
    const [is_logedIn, setIs_logedIn] = useState(false)


    useEffect( () => {
        if(localStorage.token) {
            setIs_logedIn(true)
        }
        else {
            setIs_logedIn(false)
        }
    }, [is_logedIn, localStorage.token])

    const logoutHandler = (event) => {
        dispatch(logOutAction);
        localStorage.clear()
    }
    const changeToLogin = () => {
        setIs_logedIn(false)
    }

    return (

        <div className="header">

                <div className="logo">

                    <Link to="/"><img src={logo} id="luna-logo"/></Link>

                </div>

                <div className="home-search-profile">

                    <Link to="/"><p>Home</p></Link>
                    <Link to="/search-restaurant"><p>Search</p></Link>
                    <Link to="/userprofile"><p>Profile</p></Link>

                </div>

                <div className="signup-login">

                    <Link to="/register"><button id="left">SIGNUP</button></Link>
                    {(is_logedIn === true) ? <Link to="/"><button id="right" onClick={logoutHandler}>LOGOUT</button></Link> : <Link to="/login"><button id="right" onClick={changeToLogin}>LOGIN</button></Link>}

                </div>

        </div>
    )
}
