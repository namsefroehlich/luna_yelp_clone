import React, {Component, useEffect, useState} from 'react';
import '../../sass/userprofile/userprofile.scss'
import star from '../../assets/svgs/star.svg';
import comment from '../../assets/svgs/comment.svg';
import restaurant from '../../assets/svgs/restaurant.svg';
import editprofile from '../../assets/svgs/edit.svg';
import profilepicture from '../../assets/images/user/laurents-pb.png'

import {userProfileAction} from "../../actions/userProfileAction";
import {ABOUT_USER, userprofileurl} from "../../constants";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import baseUrl from "../../constants/urls";



export const UserProfile = ({data},props) => {

    //User Nav Menu
    const [currentStage, setcurrentStage] = useState('show-reviews')

    // Get Token
    const token = localStorage.getItem("token")
    // console.log(token)

    // GET User Data
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userProfileReducer.user)

        useEffect(() => {
                const userData = async () => {
                        await dispatch(userProfileAction(ABOUT_USER))
                }
                userData();
                // console.log("user", data)
            },[]);

        // console.log("Fetched User Data:",user);

        const [email, setEmail] = useState(user.email)
        const [username, setUsername] = useState(user.username)
        const [first_name, setFirstName] = useState(user.first_name)
        const [last_name, setLastName] = useState(user.last_name)
        const [phone, setPhone] = useState(user.phone)
        const [description, setDescription] = useState(user.about)
        const [location, setLocation] = useState(user.location)
        const [fk_interest, setfk_interest] = useState()

    // PATCH User Data
                const handleSubmit = (event) => {
                                let fd = new FormData();

                if (email !== undefined) {

                        fd.append('email', email);
                }

                if (username !== undefined) {

                        fd.append('username', username);
                }

                if (description !== undefined) {

                        fd.append('about', description);
                }

                if (first_name !== undefined) {

                        fd.append('first_name', first_name);
                }

                if (last_name !== undefined) {

                        fd.append('last_name', last_name);
                }

                if (phone !== undefined) {

                        fd.append('phone', phone);
                }

                if (location !== undefined) {

                        fd.append('location', location);
                }

                if (fk_interest !== undefined) {

                    fd.append('fk_interest', fk_interest)
                }

                fd.append('_method', 'PATCH');

                // console.log(fd);


                    axios.patch(userprofileurl, fd,
                    {
                            headers: {
                                    'Authorization': `Bearer ${token}`
                            }
                    })
                    .then((response) => {
                            // console.log(response);

                    })
                    .catch((error) => {
                            if (error.response) {
                              // The request was made and the server responded with a status code
                              // that falls out of the range of 2xx
                              console.log(error.response.data);
                              console.log(error.response.status);
                              console.log(error.response.headers);}
                    });
        }

        const joinDate = new Date(`${user.date_joined}`).toLocaleDateString('en-gb', {year: 'numeric', month: 'long', day: 'numeric'});

        return( <>
            {user.hasOwnProperty("fk_interest_user") ?

            //Holds whole profile container
            <div className='container-user-profile' >

                {/*LEFT COLUMN*/}

                {/*MENU LEFT COLUMN*/}
                <div className='wrapper-menu-lc'>
                {/*PROFILE PIC LEFT COLUMN*/}
                <div className='wrapper-profile-lc'>
                    <img className='profile-picture, responsive' src={user.avatar}/>
                    <p className='user-profile-text-lc'>{user.first_name}'s Profile</p>
                </div>


                        {/*Reviews*/}
                        <div className='reviews-menu-lc' onClick={(event) => setcurrentStage('show-reviews')}>
                            <img className='menu-icon-lc' src={star}  alt=''/>
                            <p>Reviews</p>
                        </div>

                        {/*Comments*/}
                        <div className='comments-menu-lc' onClick={(event) => setcurrentStage('show-comments')}>
                            <img className='menu-icon-lc' src={comment} alt=''/>
                            <p>Comments</p>
                        </div>

                        {/*Restaurants*/}
                        <div className='restaurant-menu-lc' onClick={(event) => setcurrentStage('show-restaurants')}>
                            <img className='menu-icon-lc' src={restaurant} alt=''/>
                            <p>Restaurants</p>
                        </div>

                        {/*Edit Profile*/}
                        <div className='edit-profile-menu-lc' onClick={(event) => setcurrentStage('show-editprofile')}>
                            <img className='menu-icon-lc' src={editprofile} alt=''/>
                            <p>Edit Profile</p>
                        </div>
                    </div>

                {/*MIDDLE COLUMN*/}

                {/*User Info*/}
                <div className='middle-column'>

                    <p className='username-mc'>{user.first_name} {user.last_name}</p>
                    <p className='location-mc'>{user.location}</p>
                    <p className='amount-reviews-mc'>{user.amount_of_reviews} Reviews</p>
                    <p className='amount-comments'>{user.amount_of_comments} Comments</p>


                {/*MENU SWAPPING COMPONENTS*/}

                {/*REVIEW SHOW ON CLICK*/}
                {/*Wrapper*/}
                {currentStage === 'show-reviews' ?
                <div className='reviews-wrapper-mc'>
                    {/*Title*/}
                    <p className='reviews-title-mc'>REVIEWS</p>

                        {/*SINGLE REVIEW*/}
                        <div className='single-review-mc'>

                            {/*Restaurant Name and Date*/}
                            <div className='wrapper-review-title-date-mc'>
                            <p className='restaurant-name-mc'> Läderach Chocolatier Suisse</p>
                            <p className='date-review-mc'>10.10.2020</p>
                            </div>

                            {/*Stars*/}
                            <div className='stars-review-mc'>
                                <img className='star-one' src={star}/>
                                <img className='star-two' src={star}/>
                                <img className='star-three' src={star}/>
                                <img className='star-four' src={star}/>
                                <img className='star-five' src={star}/>
                            </div>

                            {/*Review TEXT CONTENT WRAPPER*/}
                            <div className='review-content-wrapper-mc'>
                                <p className='text-review-mc'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo</p>
                            </div>
                            <div className='hr'><hr/></div>
                        </div>

                </div>
                : null }

                {/*COMMENTS SHOW ON CLICK*/}
                {currentStage === 'show-comments' ?
                <div className='comments-wrapper-mc'>

                    <p>COMMENTS</p>

                    {/*SINGLE COMMENT*/}
                    <div className='comments-title-date-wrapper-mc'>
                        <p className='comments-title-mc'>Review 1</p>
                        <p className='comments-date-mc'>20.20.2020</p>
                    </div>

                    <div className='comments-content-wrapper-mc'>
                        <p className=''>This was horrible!</p>
                    </div>
                    <div className='hr'><hr/></div>

                </div>
                : null }

                {/*RESTAURANT SHOW ON CLICK*/}
                {currentStage === 'show-restaurants' ?
                    <div className='restaurant-wrapper-mc' >
                    <p className='restaurant-title'>RESTAURANTS</p>

                    {/*S*/}
                    <div className='single-restaurant-mc'>

                        {/*Restaurant Name and Date*/}
                        <div className='wrapper-restaurant-title-date-mc'>
                            <p className='restaurant-name-mc'>Laurention Gelato Store</p>
                            <p className='date-review-mc'>10.10.2020</p>
                        </div>

                        {/*Stars*/}
                        <div className='stars-review-mc'>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                        </div>

                        {/*Review TEXT CONTENT WRAPPER*/}
                        <div className='restaurant-content-wrapper-mc'>
                            <p className='text-restaurant-mc'>This is the Restaurant Laurents Gelato Store we have great gelato</p>
                        </div>
                        <div className='hr'><hr/></div>
                    </div>
                </div>
                : null }

                {/*EDIT PROFILE SHOW ON CLICK*/}
                {currentStage === 'show-editprofile' ?

                <div className='edit-profile-wrapper-mc'>

                {/*Title*/}
                <p className='edit-profile-title'>EDIT USERPROFILE</p>

                    <div className='input-fields-mc'>

                        {/*Username*/}
                        <div>
                            <p className='input-title'>Username</p>
                            <input type='text' onChange={(event) => setUsername(event.target.value)} defaultValue={user.username}/>
                            <p className='error-required-field-mc'>*This field is required</p>
                        </div>

                        {/*First name*/}
                        <div>
                            <p className='input-title'>First name</p>
                            <input type='text' onChange={(event) => setFirstName(event.target.value)} defaultValue={user.first_name} />

                        </div>

                        {/*Last name*/}
                        <div>
                            <p className='input-title'>Last Name</p>
                            <input type='text' onChange={(event) => setLastName(event.target.value)}  defaultValue={user.last_name}/>

                        </div>

                        {/*E-mail*/}
                        <div>
                            <p className='input-title'>E-mail</p>
                            <input type='text' onChange={(event) => setEmail(event.target.value)}  defaultValue={user.email}/>
                            <p className='error-required-field-mc'>*This field is required</p>
                        </div>

                        {/*Location*/}
                        <div>
                            <p className='input-title'>Location</p>
                            <input type='text' onChange={(event) => setLocation(event.target.value)} defaultValue={user.location} />

                        </div>

                        {/*Phone*/}
                        <div>
                            <p className='input-title'>Phone</p>
                            <input type='text' onChange={(event) => setPhone(event.target.value)} defaultValue={user.phone} />

                        </div>

                        {/*Things i love*/}
                        <div>
                            <p className='input-title'>Things I love</p>
                            {user.fk_interest_user.map(interest => {return (<><span>{interest.interest_name}</span> <span>,</span> </>)})}
                            <input className='things-i-love-input' onChange={(event) => setfk_interest(event.target.value)} type='text'/>

                        </div>

                        {/*Description*/}
                        <div>
                            <p className='input-title'>Description</p>
                            <input className='description-input' onChange={(event) => setDescription(event.target.value)} defaultValue={user.about} type='text'/>

                        </div>
                    </div>

                    <div className='save-delete-mc'>
                    <button className='save-editdprofile-mc' onClick={handleSubmit} >Save</button>
                    <p>Delete account</p>
                    </div>

                </div>
                : null }
                </div>

                {/*RIGHT COLUMN*/}
                <div className='right-column'>

                    <div className='title-about-rc'>
                        <p className='title-about'>About {user.username}</p>
                    </div>

                    <div className='location-rc'>
                        <p className='title-rc'>Location</p>
                        <p className='text'>{user.location}</p>
                    </div>

                    <div className='member-since-rc'>
                        <p className='title-rc'>Luna member since</p>
                        <p className='text'>{joinDate}</p>
                    </div>

                    <div className='things-i-love-rc'>
                        <p className='title-rc'>Things I love</p>
                        {user.fk_interest_user.map(interest_name => {return (<><span>{interest_name.interest_name}</span> <span>,</span> </>)})}
                    </div>


                    <div className='description-rc'>
                        <p className='title-rc'>Description</p>
                        <p className='text'>{user.about}</p>
                    </div>

                </div>

            </div>
               : null }
            </> )
}
