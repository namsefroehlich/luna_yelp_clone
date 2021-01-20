import {Header} from "../../components/header/header";
import {SearchRestaurants} from "../../components/search/search-restaurants";
import {Footer} from "../../components/footer/footer";
import {Searchbar} from "../../components/search/search-review-second-header";


export const SearchRestaurant = () => {

    return (
        <>
        <Header/>
        <Searchbar/>
        <SearchRestaurants/>
        <Footer/>
        </>
    )
}