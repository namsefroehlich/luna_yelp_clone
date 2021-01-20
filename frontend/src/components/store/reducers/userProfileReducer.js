import {ABOUT_USER} from "../../../constants";
import axios from "axios";
import React, {Component, useEffect, useState} from 'react';


const initialState = {
    user: []
}

export default function userProfileReducer (state = initialState, action) {
    // console.log("In The userProfileReducer")

    switch (action.type) {
        case ABOUT_USER: {

            return {...state, user: action.payload}

        }

        default: {
            return state
        }
    }

}

