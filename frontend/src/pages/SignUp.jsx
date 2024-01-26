const SignUp = () => {
    return ( 
        <section><form action="">
        <label htmlFor="username">Create Username: </label>
        <input name="username" type="text" />

        <label htmlFor="email">What's Your Email?: </label>
        <input name="email" type="email" />

        <label htmlFor="password">Create Password: </label>
        <input name="password" type="text" />

        <button>Submit</button>
    </form></section>
     );
}
 
export default SignUp;