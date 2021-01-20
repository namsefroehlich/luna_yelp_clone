import "../../sass/searchbar/search.scss"
import arrow from "../../assets/svgs/arrow.svg"


export const Searchbar = () => {


    return (

        <div className="wrapper1">

            <div className="left">

                <input type="text" className="search" placeholder="Search"/>

            </div>

            <div className="right">

                <label htmlFor="category">Select a category...</label>
                <select id="category" name="Select a category...">

                    <option selected="selected"> </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>

                </select>

            </div>

        </div>
    )
}