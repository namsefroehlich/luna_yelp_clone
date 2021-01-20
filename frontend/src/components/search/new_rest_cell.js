import star from "../../assets/svgs/star.svg"
import pic1 from "../../assets/images/homepage/bar-buffet-12-1.svg"
import "../../sass/home/_childrestaurantCell.scss"


export const NewRestaurant_cell = ({data}, props) => {


    return (

        <div className="restaurant_card_wrapper">

            <div id={`restaurant-${data.id}`}>

                <div className="upper-upper">

                    <p>{data.name}</p>
                    <p>{data.city}</p>

                    <div className="stars">

                        <img src={star}/>
                        <img src={star}/>
                        <img src={star}/>
                        <img src={star}/>
                        <img src={star}/>

                        <p>18</p>

                    </div>

                </div>



                <div className="lower-card">

                    <img src={pic1}/>


                </div>

            </div>


        </div>

    )
}