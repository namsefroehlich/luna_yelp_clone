import star from "../../assets/svgs/star.svg"
import pic1 from "../../assets/images/homepage/bar-buffet-12-1.svg"
import "../../sass/home/_childrestaurantCell.scss"


export const Restaurant_cell = ({data}, props) => {


// id={`restaurant-${data.id}`}}
    return ( // (

        <div className="restaurant_card_wrapper">

            <div>

                <div className="upper-upper">

                    <p>Restaurant</p>
                    <p>City</p>

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
    // ): null
}