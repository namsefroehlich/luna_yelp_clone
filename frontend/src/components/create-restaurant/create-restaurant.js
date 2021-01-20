import React, {Component, useState} from 'react';
import '../../sass/create-restaurant/createrestaurant.scss';
import line from "../../assets/images/createrestaurant/Line.png"
import axios from "axios";
import {createRestaurant} from "../../constants";


export const CreateRestaurant = () => {
    const token = localStorage.getItem("token")
    const [name, setname] = useState('')
    const [country, setcountry] = useState(' ')
    const [street, setstreet] = useState('')
    const [city, setcity] = useState('')
    const [zip, setzip] = useState('')
    const [website, setwebsite] = useState('')
    const [phone, setphone] = useState('')
    const [email, setemail] = useState('')
    const [category, setcategory] = useState('')
    const [price_level, setpricelevel] = useState('cheap')


    const handleSubmit = (event) => {
        let fd = new FormData();

        if (name !== undefined) {

            fd.append('name', name);

        }

        if (country !== undefined) {

            fd.append('country', country);
        }

        if (street !== undefined) {

            fd.append('street', street);
        }
        if (city !== undefined) {

            fd.append('city', city);
        }
        if (zip !== undefined) {

            fd.append('zip', zip);
        }
        if (website !== undefined) {
            fd.append('website', website);
        }
        if (phone !== undefined) {

            fd.append('phone', phone);
        }

        if (email !== undefined) {

            fd.append('email', email)
        }
        if (price_level !== undefined) {

            fd.append('price_level', price_level)
        }
        if (category !== undefined) {

            fd.append('category', category)
        }

        fd.append('_method', 'POST');

        // console.log(fd);


        axios.post(createRestaurant, fd,
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
                    console.log(error.response.headers);
                }
            });
    }

    return (

        <div className='container-create-restaurant'>

            <div className='wrapper-title'>
                <p className='title'>CREATE NEW RESTAURANT</p>
                <img src={line} />
            </div>

            <div className='wrapper-input'>

                <div className='left-column'>

                    <p className='input-title'>Name *</p>
                   <input className='input' onChange={(event) => setname(event.target.value)} type='text'/>

                    <p className='input-title'>Street *</p>
                   <input className='input' onChange={(event) => setstreet(event.target.value)} type='text'/>
                    <p className='input-title'>Website</p>
                   <input className='input' onChange={(event) => setwebsite(event.target.value)} type='text'/>

                    <p className='input-title'>Opening Hours *</p>
                   <input className='input' defaultValue='Monday - Friday 10:00am - 10:00pm' type='text'/>
git
                </div>

                <div className='middle-column'>

                    <p className='input-title'>Category *</p>
                   <input className='input' onChange={(event) => setcategory(event.target.value)} type='text'/>

                    <p className='input-title'>City *</p>
                   <input className='input' onChange={(event) => setcity(event.target.value)} type='text'/>

                    <p className='input-title'>Phone *</p>
                   <input className='input' onChange={(event) => setphone(event.target.value)} type='text'/>

                    <p className='input-title'>Price Level *</p>
                   <input className='input' onChange={(event) => setpricelevel(event.target.value)} defaultValue='$$$' type='text'/>

                </div>

                <div className='right-column'>

                    <p className='input-title'>Country *</p>
                   <input className='input' onChange={(event) => setcountry(event.target.value)} type='text'/>

                    <p className='input-title'>Zip</p>
                   <input className='input' onChange={(event) => setzip(event.target.value)} type='text'/>

                    <p className='input-title'>Email</p>
                    <input className='input' onChange={(event) => setemail(event.target.value)} type='text'/>

                    <p className='input-title'>Image</p>
                    <input type='file' id='real-file' className='image-button' />

                </div>

            </div>

            <div className='save-btn-wrapper'>
                    <button className='button' onClick={handleSubmit} >Save</button>
                </div>
        </div>
    )
}