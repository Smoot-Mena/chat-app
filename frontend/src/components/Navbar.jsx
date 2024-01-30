import { Link } from "react-router-dom";

const Navbar = ( {username, setUser} ) => {

    const logout = () => {
        localStorage.removeItem("token");
        setUser({});
    };

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
               {username ? 
               <>
                    <li style={{
                                textDecoration: "none",
                                color: "navy",
                                fontWeight: "bold"
                            }}>Welcome {username}</li>
                    <li>
                        <Link to="/profile" 
                            style={{
                                textDecoration: "none",
                                color: "#333",
                                fontWeight: "bold"
                            }}>Profile
                        </Link>
                </li>
                    <li>
                        <Link to="/login" style={{
                                textDecoration: "none",
                                color: "#333",
                                fontWeight: "bold"
                            }}>
                            Logout
                        </Link>
                    </li>
               </> : 
               <>
                    <li>
                        <Link to="/login" 
                            style={{
                                textDecoration: "none",
                                color: "#333",
                                fontWeight: "bold"
                            }}>Login
                        </Link>
                </li>
                    <li>
                        <Link to="/signup" style={{
                                textDecoration: "none",
                                color: "#333",
                                fontWeight: "bold"
                            }}>
                            Signup
                        </Link>
                    </li>
                </>}         
            </ul>
        </nav>
     );
}
 
export default Navbar;