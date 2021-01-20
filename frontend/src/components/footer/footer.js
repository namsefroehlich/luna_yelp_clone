import facebook from "../../assets/svgs/facebook.svg";
import twitter from "../../assets/svgs/twitter.svg";
import google from "../../assets/svgs/googleplus.svg";
import instagram from "../../assets/svgs/instagram.svg";
import "../../sass/footer/footer.scss"


export const Footer = () => {


    return (

        <>
            <footer>

                <div className="upper">

                    <div className="left">

                        <p>About Us</p>
                        <p>Press</p>
                        <p>Blog</p>
                        <p>iOs</p>
                        <p>Android</p>

                    </div>

                    <div className="right">

                        <img src={facebook}/>
                        <img src={twitter}/>
                        <img src={google}/>
                        <img src={instagram}/>

                    </div>

                </div>

                <div className="lower">

                    <div className="copyright">

                        <p>© Copyright Luna 2018</p>

                    </div>

                </div>

            </footer>


        </>
    )
}