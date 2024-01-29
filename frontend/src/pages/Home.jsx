import { Link } from "react-router-dom";

const Home = () => {

    const date = new Date();
    const time = date.toDateString();
    return ( 
        <section>
            <nav style={{
                borderTop: "3px solid darkblue",
                borderBottom: "3px solid darkblue",
                height: "80px",
                backgroundColor: "#333"
            }}>
                <ul style={{
                    listStyle: "none",
                    display: "flex",
                    gap: "2px"
                    // justifyContent: "space-evenly"
                }}>
                    <li style={{
                        width: "15vw",
                        backgroundColor: "deepskyblue",
                        color: "snow",
                        fontWeight: "bold",
                        padding: "0 5px"
                    }}>Mail</li>
                    <li style={{
                        width: "15vw",
                        backgroundColor: "forestgreen",
                        color: "snow",
                        fontWeight: "bold",
                        padding: "0 5px"
                    }}>People</li>
                    <li style={{
                        width: "20vw",
                        backgroundColor: "plum",
                        color: "snow",
                        fontWeight: "bold",
                        padding: "0 5px"
                    }}>FAM Services</li>
                    <li style={{
                        width: "10vw",
                        backgroundColor: "darkturquoise",
                        color: "snow",
                        fontWeight: "bold",
                        padding: "0 5px"
                    }}>Settings</li>
                    <li style={{
                        width: "40vw",
                        backgroundColor: "mediumorchid",
                        color: "snow",
                        fontWeight: "bold",
                        padding: "0 5px"
                    }}>Favorites</li>
                </ul>
                <ul style={{
                    listStyle: "none",
                    display: "flex",
                    height: "55px",
                    gap: "2px",
                }}>
                    <li style={{
                        width: "14.95vw",
                        backgroundColor: "dodgerblue",
                        fontWeight: "bold",
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0 4px",
                        alignItems: "flex-end"
                    }}><span style={{
                            color: "snow",
                            textDecoration: "none"
                        }} href="">Read</span>
                        <span style={{
                            color: "snow",
                            textDecoration: "none"
                        }} href="">Write</span>
                     </li>
                    <li style={{
                        width: "14.95vw",
                        backgroundColor: "darkgreen",
                        fontWeight: "bold",
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0 4px",
                        alignItems: "flex-end"
                    }}>
                        <Link style={{
                            color: "snow",
                            textDecoration: "none"
                        }} to="/chathome">IM</Link>
                        <Link style={{
                            color: "snow",
                            textDecoration: "none",
                    }} to="/chathome">Chat</Link>
                    </li>
                    <li style={{
                        width: "19.90vw",
                        backgroundColor: "mediumorchid",
                        fontWeight: "bold",
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0 4px",
                        alignItems: "flex-end"
                    }}>
                        <span style={{
                            color: "snow",
                            textDecoration: "none"
                        }} href="">Shop</span>
                        <span style={{
                            color: "snow",
                            textDecoration: "none",
                    }} href="">Internet</span>
                    </li>
                    <li style={{
                        width: "9.95vw",
                        backgroundColor: "lightseagreen",
                        fontWeight: "bold",
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0 4px",
                        alignItems: "flex-end"
                    }}>
                        <span style={{
                            color: "snow",
                            textDecoration: "none"
                        }} href="">Shop</span>
                        <span style={{
                            color: "snow",
                            textDecoration: "none",
                    }} href="">Internet</span>
                    </li>
                    <li style={{
                        width: "39.80vw",
                        backgroundColor: "rebeccapurple",
                        fontWeight: "bold",
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0 4px",
                        alignItems: "flex-end"
                    }}>
                        <span style={{
                            color: "snow",
                            textDecoration: "none"
                        }} href="">My Favorites</span>
                        <span style={{
                            color: "snow",
                            textDecoration: "none",
                    }} href="">Calendar</span>
                        <span style={{
                                color: "snow",
                                textDecoration: "none"
                            }} href="">Quotes</span>
                            <span style={{
                                color: "snow",
                                textDecoration: "none",
                        }} href="">Perks</span>
                    </li>
                </ul>
            </nav>
            <nav style={{
                width: "200px",
                backgroundColor: "lightgrey",
                boxShadow: "2px 2px 2px black"
            }}>
                <header style={{
                    backgroundColor: "darkgrey",
                    color: "lightgrey",
                    fontWeight: "bold",
                    textAlign: "center",
                    height: "25px",
                }}>FAM Links <span style={{
                    color: "black",
                    fontWeight: "bold",
                    width: "8px",
                    height: "3px",
                    padding: "0 5px",
                    boxShadow: "1px 1px 2px black",
                }}>_</span><span style={{
                    color: "black",
                    fontWeight: "bold",
                    width: "8px",
                    height: "3px",
                    padding: "0 5px",
                    boxShadow: "1px 1px 2px black",
                }}>X</span></header>
                <ul style={{
                    listStyle: "none",
                    color: "darkblue",
                    fontWeight: "bold",
                    lineHeight: "28px",
                }}>
                    <li style={{ paddingLeft: "25px", borderBottom: "1px solid darkgrey"}}>Welcome</li>
                    <li style={{ paddingLeft: "25px", borderBottom: "1px solid darkgrey"}}>Autos</li>
                    <li style={{ paddingLeft: "25px", borderBottom: "1px solid darkgrey"}}>Careers & Work</li>
                    <li style={{ paddingLeft: "25px", borderBottom: "1px solid darkgrey"}}>Computer Center</li>
                    <li style={{ paddingLeft: "25px", borderBottom: "1px solid darkgrey"}}>Entertainment</li>
                    <li style={{ paddingLeft: "25px", borderBottom: "1px solid darkgrey"}}>Games</li>
                    <li style={{ paddingLeft: "25px", borderBottom: "1px solid darkgrey"}}>Health</li>
                    <li style={{ paddingLeft: "25px", borderBottom: "1px solid darkgrey"}}>House & Home</li>
                    <li style={{ paddingLeft: "25px", borderBottom: "1px solid darkgrey"}}>Kids Only</li>
                    <li style={{ paddingLeft: "25px", borderBottom: "1px solid darkgrey"}}>Local Guide</li>
                    <li style={{ paddingLeft: "25px", borderBottom: "1px solid darkgrey"}}>Music</li>
                    <li style={{ paddingLeft: "25px", borderBottom: "1px solid darkgrey"}}>News</li>
                    <li style={{ paddingLeft: "25px", borderBottom: "1px solid darkgrey"}}>Parenting</li>
                    <li style={{ paddingLeft: "25px", borderBottom: "1px solid darkgrey"}}>Personal Finance</li>
                    <li style={{ paddingLeft: "25px", borderBottom: "1px solid darkgrey"}}>Research & Learn</li>
                    <li style={{ paddingLeft: "25px", borderBottom: "1px solid darkgrey"}}>Shopping</li>
                    <li style={{ paddingLeft: "25px", borderBottom: "1px solid darkgrey"}}>Sports</li>
                    <li style={{ paddingLeft: "25px", borderBottom: "1px solid darkgrey"}}>Teens</li>
                    <li style={{ paddingLeft: "25px", borderBottom: "1px solid darkgrey"}}>Travel</li>
                    <li style={{ paddingLeft: "25px", borderBottom: "1px solid darkgrey"}}>Women</li>
                </ul>
            </nav>
            <main style={{
                position: "absolute",
                top: "20vh",
                left: "25vw",
                boxShadow: "2px 2px 2px black",
                width: "800px",
                minWidth: "700px",
                display: "flex",
                flexFlow: "row wrap"
            }}>
                <header style={{
                    backgroundImage: "linear-gradient(to right, mediumblue, darkblue)",
                    color: "snow",
                    fontWeight: "bold",
                    // textAlign: "center",
                    display: "flex",
                    justifyContent: "space-around",
                    width: "inherit"
                }}>Welcome to FAM<span>{time}</span><span style={{ color: "yellow" }}>Weather</span>
                <section style={{ backgroundColor: "lightgrey" }}>
                    <span style={{
                        color: "black",
                        fontWeight: "bold",
                        padding: "0 6px",
                        boxShadow: "1px 1px 2px black",
                    }}>_</span><span style={{
                        color: "black",
                        fontWeight: "bold",
                        padding: "0 6px",
                        boxShadow: "1px 1px 2px black",
                    }}>X</span>
                </section>
                </header>
                <section style={{
                    backgroundColor: "dodgerblue",
                    color: "snow",
                    width: "150px",
                    textAlign: "center",
                    lineHeight: "3em"
                }}>
                    <figure>
                        <img src="" alt="" />
                        <figcaption>Logo</figcaption>
                    </figure>
                    <ul>
                        <li style={{ fontWeight: "bold" }}><p style={{ fontSize: "2em" }}>📬</p>Get Yo' Mail</li>
                        <li style={{ fontWeight: "bold" }}><p style={{ fontSize: "2em" }}>🎞️</p>Check Yo' Pics</li>
                        <li style={{ fontWeight: "bold" }}><p style={{ fontSize: "2em" }}>📅</p>Yo' Calendar</li>
                        <li style={{ fontWeight: "bold" }}><p style={{ fontSize: "2em" }}>🗨️</p>Chat or Nah?</li>
                    </ul>
                </section>
                <section style={{ padding: "10px", display: "flex", gap: "20px", width: "500px" }}>
                    <article style={{ 
                        width: "200px",
                        }}>
                        <figure>
                            <img src="src/assets/city-skyline.jpg" alt="Skyline" width="150px"/>
                            <figcaption style={{ fontWeight: "bold" }}>Rental Prices Climb</figcaption>
                        </figure>
                        <p style={{ color: "blue", textDecoration: "underline" }}>Top 10 cities list</p>
                    </article>
                    <article>
                        <figure>
                            <img src="src/assets/white-outfit.jpg" alt="Fashion trends" width="150px"/>
                            <figcaption style={{ fontWeight: "bold" }}>Fashion Trends</figcaption>
                            <p style={{ color: "purple", textDecoration: "underline" }}>Hot new styles here</p>
                        </figure>
                    </article>
                    <article>
                        <p>Top 10 Songs of the Month</p>
                        <p></p>
                        <p></p>
                    </article>
                    <article>
                        <p>Top 10 Songs of the Month</p>
                        <p></p>
                        <p></p>
                    </article>
                    <article>
                        <figure>
                            <img src="" alt="" />
                            <figcaption></figcaption>
                            <p></p>
                        </figure>
                    </article>
                    <article>
                        <figure>
                            <img src="" alt="" />
                            <figcaption></figcaption>
                            <p></p>
                        </figure>
                    </article>
                </section>
                <section style={{
                    width: "150px",
                    // position: "absolute",
                    // top: "3vh",
                    // right: "0"
                }}>
                    <header>Yo' Places</header>
                    <ul style={{ listStyle: "none" }}>
                        <li>Customize Yo' Places</li>
                        <li>Greetings</li>
                        <li>Horoscopes</li>
                        <li>Local News</li>
                        <li>Maps & Directions</li>
                        <li>Portfolios</li>
                        <li>People Directory</li>
                        <li>Sports Scores</li>
                        <li>Stock Quotes</li>
                        <li>What's New on FAM</li>
                        <li>White Pages</li>
                    </ul>
                </section>
            </main>
            <section style={{
                position: "absolute",
                top: "12vh",
                right: "0"
            }}>
                <header>Pal List</header>
                <ul>
                    <li>Pals</li>
                    <li>Family</li>
                    <li>Co-workers</li>
                </ul>
                <form action="">
                    <button>Chat</button>
                </form>
            </section>
        </section>
     );
}
 
export default Home;