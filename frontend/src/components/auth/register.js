import React, {useState} from "react";
import "../../sass/register/register.scss"
import axios from "axios";
import {registration, validation} from "../../constants";
import {userLogin} from "../../actions/userLoginAction";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

export const Register = () => {

    const [currentRegStage, setcurrentRegStage] = useState(0)
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [code, setCode] = useState("")
    const [username, setUsername] = useState("")
    const [location, setLocation] = useState("")
    const [passwordRe, setPasswordRe] = useState("")

    const dispatch = useDispatch();
    let history = useHistory();


    const interval = setInterval(() => {
        if (currentRegStage === 1) {
            setcurrentRegStage(2)
        }
    }, 10000)

    const changeStage = () => {
        setcurrentRegStage(+1)
        handleRegEmail()
    }

    const handleRegEmail = (event) => {
        axios.post(registration, {
            email: email
        })
        .catch((error) => {
            console.log(error)
        })

    }

    const handleSubmitReg = (event) => {

        event.preventDefault();

        if(password === passwordRe) {
            axios.post(validation, {
                email: email,
                username: username,
                code: code,
                password: password,
                location: location
            })
            .then((request) => {
                if(request) {
                    dispatch(userLogin({
                        username: request["username"],
                        password: request["password"]
                    }))
                    if(localStorage) {
                        history.push("/")
                    }
                }
            })
            .catch((error) => {
                console.log(error);
            });

        }
        else {
            alert("Passwords must be the same!")
        }

    };


    return (

        <div className="container">

            <div className="wrapper">

                {currentRegStage === 0 ?

                    <>

                        <div className="signIn">

                            <p>REGISTRATION</p>

                        </div>

                        <div className="email">

                            <input
                            type="email"
                            // value={email}
                            onChange={ event => setEmail(event.target.value)}
                            placeholder="Email"
                            />

                        </div>


                        <div className="btn-container">

                            <button type="text" id="signin" onClick={changeStage}>Register</button>

                        </div>

                    </>




                : null }

                {currentRegStage === 1 ?

                    <>

                        <div className="signIn2">

                            <p>REGISTRATION</p>

                        </div>

                        <div className="reg_content">

                            <p>Thanks for your registration. <br/>Our hard working monkeys are preparing a digital message called E-Mail that will be sent to you soon. Since monkeys arent good in writing the message could end up in you're junk folder. Our apologies for any inconvienience.thank for </p>

                        </div>

                    </>

                : null }

                {currentRegStage === 2 ?

                    <>

                        <div className="signIn">

                            <p>VERIFICATION</p>

                        </div>

                        <div className="form-tab">

                            <div>

                                <input type="email" placeholder="E-Mail address" onChange={ event => setEmail(event.target.value)}/>
                                <input type="number" placeholder="Validation code" onChange={ event => setCode(event.target.value)}/>
                                <input type="text" placeholder="Username" onChange={ event => setUsername(event.target.value)}/>
                                <input type="text" placeholder="Location" onChange={ event => setLocation(event.target.value)}/>
                                <input type="password" placeholder="Password" onChange={ event => setpassword(event.target.value)}/>
                                <input type="password" placeholder="Password repeat" onChange={ event => setPasswordRe(event.target.value)}/>

                            </div>

                        </div>

                        <div className="btn-container">

                            <button type="text" id="finish-reg" onClick={handleSubmitReg}>Finish registration</button>

                        </div>

                    </>

                : null }


            </div>

        </div>
    )
}