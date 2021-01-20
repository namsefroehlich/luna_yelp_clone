import { useState } from 'react'
import {List_all_Restaurants} from "../../../constants";

const initialState = {
    restaurantsAllChron: []
}

export const restaurantReducer = (state = initialState, action) => {

    switch (action.type) {
        case List_all_Restaurants: {
            return {
                ...state,
                restaurantsAllChron: action.payload
            }
        }
        default: {
            return state
        }
    }


}