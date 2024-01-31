import { Link } from "react-router-dom";

const Home = () => {

    const date = new Date();
    const time = date.toDateString();
    return ( 
        <section>
            <nav style={{
                borderTop: "3px solid darkblue",
                borderBottom: "3px solid darkblue",
                height: "82px",
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
                        padding: "0 20px",
                        alignItems: "flex-end"
                    }}><span style={{
                            color: "snow",
                            textDecoration: "none"
                        }} href=""><span style={{ fontSize: "2em" }}>📬</span>Read</span>
                        <span style={{
                            color: "snow",
                            textDecoration: "none"
                        }} href=""><span style={{ fontSize: "2em" }}>📝</span>Write</span>
                     </li>
                    <li style={{
                        width: "14.95vw",
                        backgroundColor: "darkgreen",
                        fontWeight: "bold",
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0 20px",
                        alignItems: "flex-end"
                    }}>
                        <Link style={{
                            color: "snow",
                            textDecoration: "none"
                        }} to="/chathome"><span style={{ fontSize: "2em" }}>🏃🏾</span>IM</Link>
                        <Link style={{
                            color: "snow",
                            textDecoration: "none",
                    }} to="/chathome"><span style={{ fontSize: "2em" }}>👨‍👩‍👧‍👦</span>Chat</Link>
                    </li>
                    <li style={{
                        width: "19.90vw",
                        backgroundColor: "mediumorchid",
                        fontWeight: "bold",
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0 20px",
                        alignItems: "flex-end"
                    }}>
                        <span style={{
                            color: "snow",
                            textDecoration: "none"
                        }} href=""><span style={{ fontSize: "2em" }}>🛍️</span>Shop</span>
                        <span style={{
                            color: "snow",
                            textDecoration: "none",
                    }} href=""><span style={{ fontSize: "2em" }}>🌐</span>Internet</span> 
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
                            textDecoration: "none",
                    }} href="">
                        <img src="/src/assets/react.svg" alt="Logo" width="30px"/>
                        FAM Anywhere</span>
                    </li>
                    <li style={{
                        width: "39.80vw",
                        backgroundColor: "rebeccapurple",
                        fontWeight: "bold",
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0 20px",
                        alignItems: "flex-end"
                    }}>
                        <span style={{
                            color: "snow",
                            textDecoration: "none"
                        }} href=""><span style={{ fontSize: "2em" }}>💌</span>My Favorites</span>
                        <span style={{
                            color: "snow",
                            textDecoration: "none",
                    }} href=""><span style={{ fontSize: "2em" }}>📅 </span>Calendar</span>
                        <span style={{
                                color: "snow",
                                textDecoration: "none"
                            }} href=""><span style={{ fontSize: "2em" }}>💲</span>Quotes</span>
                            <span style={{
                                color: "snow",
                                textDecoration: "none",
                        }} href=""><span style={{ fontSize: "2em" }}>🎁</span>Perks</span>
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
                }}><img src="/src/assets/react.svg" alt="Logo" width="15px"/>
                    FAM Links <span style={{
                    color: "black",
                    fontWeight: "bold",
                    width: "8px",
                    height: "3px",
                    padding: "0 5px",
                    boxShadow: "1px 1px 2px black",
                    backgroundColor: "lightgrey"
                }}>_</span> <span style={{
                    color: "black",
                    fontWeight: "bold",
                    width: "8px",
                    height: "3px",
                    padding: "0 5px",
                    boxShadow: "1px 1px 2px black",
                    backgroundColor: "lightgrey"
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
                width: "850px",
                minWidth: "700px",
                display: "flex",
                flexFlow: "row wrap",
                backgroundColor: "snow"
            }}>
                <header style={{
                    backgroundImage: "linear-gradient(to right, mediumblue, darkblue)",
                    color: "snow",
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: "space-around",
                    width: "inherit"
                }}><img src="/src/assets/react.svg" alt="Logo" width="20px"/>
                    Welcome to FAM<span>{time}</span><span style={{ color: "yellow" }}>Weather</span>
                <section style={{ backgroundColor: "lightgrey" }}>
                    <span style={{
                        color: "black",
                        padding: "0 6px",
                        boxShadow: "1px 1px 2px black",
                    }}>_</span><span style={{
                        color: "black",
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
                    <figure style={{ marginTop: "10px" }}>
                        <img src="/src/assets/react.svg" alt="Logo" width="100px"/>
                        <figcaption></figcaption>
                    </figure>
                    <ul style={{ listStyle: "none", fontWeight: "bold" }}>
                        <li><p style={{ fontSize: "2em" }}>📬</p>Get Yo' Mail</li>
                        <li><p style={{ fontSize: "2em" }}>🎞️</p>Check Yo' Pics</li>
                        <li><p style={{ fontSize: "2em" }}>📅</p>Yo' Calendar</li>
                        <li><p style={{ fontSize: "2em" }}>🗨️</p>Chat or Nah?</li>
                    </ul>
                </section>
                <section style={{ padding: "10px", display: "flex", gap: "20px", width: "500px", flexFlow: "row wrap" }}>
                    <article style={{ 
                        width: "150px",
                        }}>
                        <figure>
                            <img src="src/assets/city-skyline.jpg" alt="Skyline" width="150px"/>
                            <figcaption style={{ fontWeight: "bold" }}>Rental Prices Climb</figcaption>
                        </figure>
                        <p style={{ color: "blue", textDecoration: "underline" }}>Top 10 cities list</p>
                    </article>
                    <article style={{ lineHeight: "1.7em" }}>
                        <figure>
                            <img src="src/assets/white-outfit.jpg" alt="Fashion trends" width="150px"/>
                            <figcaption style={{ fontWeight: "bold" }}>Fashion Trends</figcaption>
                            <p style={{ color: "purple", textDecoration: "underline" }}>Hot new styles here</p>
                            <p style={{ fontWeight: "bold" }}>Accessories:</p>
                            <p style={{ color: "blue", textDecoration: "underline" }}>Watches & Belts</p>
                        </figure>
                    </article>
                    <article style={{ width: "120px", lineHeight: "1.7em" }}>
                        <p style={{ color: "blue", textDecoration: "underline" }}>Top Brands</p>
                        <p style={{ color: "blue", textDecoration: "underline" }}>Shop shoes</p>
                        <p style={{ color: "purple", textDecoration: "underline" }}>Shop jewelry</p>
                    </article>
                    <article>
                        <figure>
                            <img src="/src/assets/concert.jpg" alt="Concert" width="100px"/>
                            <figcaption style={{ fontWeight: "bold" }}>Slipknot concert</figcaption>
                            <p style={{ color: "blue", textDecoration: "underline" }}>Purchase tickets here</p>
                        </figure>
                    </article>
                    <article style={{ lineHeight: "1.7em" }}>
                        <p style={{ fontWeight: "bold" }}>Concert season is here</p>
                        <p style={{ color: "blue", textDecoration: "underline" }}>Top 10 Songs of the Month</p>
                        <p style={{ color: "blue", textDecoration: "underline" }}>Grammy nominees</p>
                        <p style={{ fontWeight: "bold", color: "red" }}>Top News: </p>
                        <p style={{ color: "blue", textDecoration: "underline" }}>London Bridge has fallen!</p>
                        <p style={{ color: "blue", textDecoration: "underline" }}>Humpty Dumpty suffers from fall</p>
                        <p style={{ color: "purple", textDecoration: "underline" }}>Wolf arrested for harrassing pigs</p>
                    </article>
                </section>
                <section style={{
                    width: "200px",
                    backgroundColor: "lightcyan"
                }}>
                    <header style={{ fontWeight: "bold", color: "snow", backgroundColor: "dodgerblue", padding: "0 5px", fontSize: "1.5em" }}>Yo' Places</header>
                    <ul style={{ listStyle: "square", marginLeft: "20px", color: "mediumorchid", fontWeight: "bold", lineHeight: "1.5em" }}>
                        <li style={{ color: "deepskyblue" }}>Customize Yo' Places</li>
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
                    <header style={{ fontWeight: "bold", color: "snow", backgroundColor: "dodgerblue", padding: "0 5px", fontSize: "1.2em" }}>Check This Out</header>
                    <ul style={{ listStyle: "square", marginLeft: "20px", color: "mediumorchid", fontWeight: "bold", lineHeight: "1.75em" }}>
                        <li style={{ color: "crimson" }}>Member Rewards</li>
                        <li style={{ color: "blue" }}>Order Shopping</li>
                        <br />
                        <li style={{ color: "crimson" }}>FAM Help</li>
                        <li>Go to Internet</li>
                        <li>Parental Controls</li>
                    </ul>
                </section>
            </main>
            <section style={{
                position: "absolute",
                top: "12vh",
                right: "2vw",
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
                }}><img src="/src/assets/react.svg" alt="Logo" width="15px"/>
                    Pal List <span style={{
                    color: "black",
                    width: "8px",
                    height: "3px",
                    padding: "0 5px",
                    boxShadow: "1px 1px 2px black",
                    backgroundColor: "lightgrey"
                }}>_</span> <span style={{
                    color: "black",
                    fontWeight: "bold",
                    width: "8px",
                    height: "3px",
                    padding: "0 5px",
                    boxShadow: "1px 1px 2px black",
                    backgroundColor: "lightgrey"
                }}>X</span></header>
                <header style={{
                    textAlign: "center",
                    height: "25px",
                    backgroundColor: "dodgerblue",
                    color: "snow",
                    fontWeight: "bold",
                }}><img src="" alt="" />🏃🏾 Pal List</header>
                <ul style={{ listStyle: "none", backgroundColor: "snow", paddingLeft: "10px", fontWeight: "bold", lineHeight: "1.75em", height: "30vh", borderBottom: "2px solid black" }}>
                    <li style={{ color: "snow", backgroundColor: "blue", width: "max-content", paddingLeft: "2px" }}>Pals (2/16)</li>
                    <li>Family (0/8)</li>
                    <li>Co-workers (0/5)</li>
                </ul>
                <section style={{ 
                    backgroundColor: "papayawhip", 
                    height: "25vh", 
                    padding: "10px",
                    }}>
                    <button style={{ backgroundColor: "lightcyan", padding: "5px", color: "dodgerblue", margin: "5px", border: "none", boxShadow: "2px 2px 3px black", fontWeight: "bold" }}>
                        <p style={{ fontSize: "2em", width: "max-content",}}>🔦</p>Locate
                    </button>
                    <button style={{ backgroundColor: "lightcyan", padding: "5px", color: "dodgerblue", margin: "5px", border: "none", boxShadow: "2px 2px 3px black", fontWeight: "bold" }}><p style={{ fontSize: "2em", width: "max-content"}}>🏃🏾</p>IM</button>
                    <button style={{ backgroundColor: "lightcyan", padding: "5px", color: "dodgerblue", margin: "5px", border: "none", boxShadow: "2px 2px 3px black", fontWeight: "bold" }}><p style={{ fontSize: "2em", width: "max-content"}}>🔧</p>Setup</button>
                    <button style={{ backgroundColor: "lightcyan", padding: "5px", color: "dodgerblue", margin: "5px", border: "none", boxShadow: "2px 2px 3px black", fontWeight: "bold" }}><p style={{ fontSize: "2em", width: "max-content"}}>👨‍👩‍👧‍👦</p>Pal Chat</button>
                </section>
            </section>
        </section>
     );
}
 
export default Home;