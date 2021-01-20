import "../../sass/login/login.scss"
import {useState} from "react";
import {useDispatch} from "react-redux";
import {userLogin} from "../../actions/userLoginAction";
import {useHistory} from "react-router-dom";

export const Login = () => {

    const dispatch = useDispatch()
    let history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const nextButtonHandler = async(event) => {

        const user = await dispatch(userLogin({
            username: username,
            password: password
        }))
            .then(() => {
               if(localStorage) {
                   history.push("/")
               }
        })

        // console.log("User", user)

    }


    return (

        <main className="login-container">

            <div className="wrapper">

                <div className="login">

                    <p>LOGIN</p>

                </div>

                <div className="inputs">

                    <input className="username" placeholder="Username" onChange={ event => setUsername(event.target.value)}/>
                    <input type="password" className="password" placeholder="Password" onChange={ event => setPassword(event.target.value)}/>

                </div>

                <div className="btn-container">

                    <button type="submit" className="button" id="login" onClick={nextButtonHandler}>Login</button>

                </div>
            </div>

        </main>
    )
}