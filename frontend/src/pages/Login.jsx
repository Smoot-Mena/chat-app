const Login = () => {
    return ( 
        <section>
            <form action="">
                <label htmlFor="username">Username: </label>
                <input name="username" type="text" />

                <label htmlFor="password">Password: </label>
                <input name="password" type="text" />

                <button>Submit</button>
            </form>
        </section>
     );
}
 
export default Login;