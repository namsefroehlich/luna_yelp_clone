import baseUrl from "../constants/urls";
import React, {Component, useEffect, useState} from 'react';
import {userprofileurl} from "../constants";

export const setUserData = (type, data) => {
    return {
        type: type,
        payload: data,
    }
}

export const userProfileAction = (type) => async (dispatch, getState) => {
    // const { userLoginReducer:{ token } } = getState();
    const token = localStorage.getItem("token");

    const config = {
        method: "GET",
        headers: new Headers({
            'Authorization': `Bearer ${token}`,
        }),

    };

    // console.log(token)
    const response = await fetch(userprofileurl, config)
    const data = await response.json();

    // console.log("Fetching UserProfileData")

    dispatch(setUserData(type, data));
    // console.log("data", data)
};
