import "../Css/home.css";
import logo from "../images/log.jpg"



function Home(){
    return(

        <div>
            <div class = "Nav">
                
                    <h3 className="naming">kevin mahlauli</h3>
                
            <img src={logo} alt="logo" className="pic"/>
            <button>logout</button>
            </div>
            <div className="container-box">

            </div>
           
        </div>
    )
}

export default Home;