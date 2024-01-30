const Profile = ( {username, email} ) => {
    return ( 
        <section>
            <h1>Profile</h1>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
        </section>
     );
}
 
export default Profile;