import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {List_all_Restaurants} from "../../constants";
import {listRestaurant} from "../../actions/restaurantAction";
import "../../sass/search-restaurant/search-restaurant.scss"
import {NewRestaurant_cell} from "../search/new_rest_cell";

export const SearchRestaurants = ({data}, props) => {


    const dispatch = useDispatch()
    const restaurantsAllChron = useSelector((state) => state.restaurantReducer.restaurantsAllChron)


    useEffect(() => {
        dispatch(listRestaurant(List_all_Restaurants))
    },[])


    return (

        <div className="restaurant-container">

            <div className="restaurants-reviews-users">

                <p>RESTAURANTS</p>
                <p>REVIEWS</p>
                <p>USERS</p>

            </div>

            <div className="restaurant-cards">

                {restaurantsAllChron.length > 0 ? restaurantsAllChron.map(restaurant =>
                <NewRestaurant_cell key={restaurant.id} data={restaurant}/>) : null}

            </div>
        </div>
    )
}