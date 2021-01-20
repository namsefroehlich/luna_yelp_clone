import {Header} from "../../components/header/header";
import {Footer} from "../../components/footer/footer";
import {Restaurant} from "../../components/restaurant/restaurant";
import { Searchbar } from "../../components/search/search-review-second-header";


export const RestaurantPage = () => {

    return (
        <>
        <Header/>
        <Searchbar/>
        <Restaurant/>
        <Footer/>
        </>
    )
}