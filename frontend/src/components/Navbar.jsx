import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav style={{
            backgroundColor: "lightgrey"
        }}>
            <ul style={{
                listStyle: "none",
                display: "flex",
                justifyContent: "left",
                gap: "0 20px",
                paddingLeft: "30px"
            }}>
                <li>
                    <Link to="/" style={{
                        textDecoration: "none",
                        color: "#333",
                        fontWeight: "bold"
                    }}>Home</Link>
                </li>
                <li>
                    <Link to="/profile" 
                        style={{
                            textDecoration: "none",
                            color: "#333",
                            fontWeight: "bold"
                        }}>Profile</Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;