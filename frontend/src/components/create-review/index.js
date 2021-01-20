import React, {Component, useState} from 'react';
import '../../sass/create-review/review.scss';
import star from "../../assets/svgs/star.svg";

export const CreateReview = () => {

    const placeholder = 'Your review helps others learn about great local businesses.'


    return (

        <div className='container-create-review'>

            <div className='top'>

                <p className='restaurant-name'>Läderach Chocolatier Switzerland</p>
                <p className='restaurant-category'> Chocolatiers & Shops</p>

                <div className='stars-restaurant'>
                    <img className='star-one' src={star}/>
                    <img className='star-two' src={star}/>
                    <img className='star-three' src={star}/>
                    <img className='star-four' src={star}/>
                    <img className='star-five' src={star}/>

                    <p className='reviews-total'>68 Reviews</p>

                </div>

            </div>

            <div className='bottom'>

                <div className='stars-review'>
                    <img className='star-one' src={star}/>
                    <img className='star-two' src={star}/>
                    <img className='star-three' src={star}/>
                    <img className='star-four' src={star}/>
                    <img className='star-five' src={star}/>

                    <p>Select your rating</p>
                </div>

                <input type='text' placeholder={placeholder} value=''/>
                <button className='save-btn'>Save</button>


            </div>
        </div>
    )
}