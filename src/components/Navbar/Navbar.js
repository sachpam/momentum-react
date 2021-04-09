import "./Navbar.css";

function Navbar() {
    return (
        <div className="nav">
            <div className="nav-comp">
                <h3 className="link">Links</h3>
                <i class="fas fa-search"></i>
            </div>
            <div className="nav-comp">
                <i class="fas fa-cloud-sun"></i>
                <div className="weather-box">
                    <h1 className="weather">26</h1>
                    <div className="city">Kandy</div>   
                </div>
                
            </div>
        </div>
 
    )
}

export default Navbar;