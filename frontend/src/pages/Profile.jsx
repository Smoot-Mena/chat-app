const Profile = ( {username, email} ) => {
    return ( 
        <section style={{
            marginTop: "20vh",
            marginLeft: "40vw",
            width: "250px",
            backgroundImage: "linear-gradient(to top, snow, powderblue, lightskyblue)",
            borderRadius: "7px"
        }}>
            <h1 style={{ marginLeft: "5vw", width: "200px", marginBottom: "30px", fontSize: "2em" }}>Profile</h1>
            <p style={{
                    width: "200px",
                    textAlign: "center",
                    fontWeight: "bold",
                }}>Username: {username}</p>
            <p style={{
                    width: "200px",
                    textAlign: "center",
                    fontWeight: "bold",
                }}>Email: {email}</p>
        </section>
     );
}
 
export default Profile;