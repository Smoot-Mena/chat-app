import { Link } from "react-router-dom";

const Home = () => {
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
                    }}><a style={{
                            color: "snow",
                            textDecoration: "none"
                        }} href="">Read</a>
                        <a style={{
                            color: "snow",
                            textDecoration: "none"
                        }} href="">Write</a>
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
                        <a style={{
                            color: "snow",
                            textDecoration: "none"
                        }} href="">IM</a>
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
                        <a style={{
                            color: "snow",
                            textDecoration: "none"
                        }} href="">Shop</a>
                        <a style={{
                            color: "snow",
                            textDecoration: "none",
                    }} href="">Internet</a>
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
                        <a style={{
                            color: "snow",
                            textDecoration: "none"
                        }} href="">Shop</a>
                        <a style={{
                            color: "snow",
                            textDecoration: "none",
                    }} href="">Internet</a>
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
                        <a style={{
                            color: "snow",
                            textDecoration: "none"
                        }} href="">My Favorites</a>
                        <a style={{
                            color: "snow",
                            textDecoration: "none",
                    }} href="">Calendar</a>
                        <a style={{
                                color: "snow",
                                textDecoration: "none"
                            }} href="">Quotes</a>
                            <a style={{
                                color: "snow",
                                textDecoration: "none",
                        }} href="">Perks</a>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li>Welcome</li>
                    <li>Autos</li>
                    <li>Careers & Work</li>
                    <li>Computer Center</li>
                    <li>Entertainment</li>
                    <li>Games</li>
                    <li>Health</li>
                    <li>House & Home</li>
                    <li>Kids Only</li>
                    <li>Local Guide</li>
                    <li>Music</li>
                    <li>News</li>
                    <li>Parenting</li>
                    <li>Personal Finance</li>
                    <li>Research & Learn</li>
                    <li>Shopping</li>
                    <li>Sports</li>
                    <li>Teens</li>
                    <li>Travel</li>
                    <li>Women</li>
                </ul>
            </nav>
            <main>
                <header>Welcome to FAM <Date /> Weather</header>
                <section>
                    <figure>
                        <img src="" alt="" />
                        <figcaption>Logo</figcaption>
                    </figure>
                    <a href="">Get Yo' Mail</a>
                    <a href="">Check Yo' Pics</a>
                    <a href="">Yo' Calendar</a>
                    <a href="">Chat or Nah?</a>
                </section>
                <section>
                    <article>
                        <figure>
                            <img src="" alt="" />
                            <figcaption></figcaption>
                        </figure>
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
                    <article>
                        <figure>
                            <img src="" alt="" />
                            <figcaption></figcaption>
                            <p></p>
                        </figure>
                    </article>
                </section>
                <section>
                    <header>Yo' Places</header>
                    <ul>
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
            <section>
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