import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

let emptyForm = {
    username: "",
    password: ""
};

const Login = ( {setUser} ) => {

    const navigate = useNavigate();

    let [form, setForm] = useState(emptyForm);

    const handleChange = (event) => {
        setForm( {...form, [event.target.name]: event.target.value} );
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("/auth/login", form);
            const token = response.data.token;
            console.log(token);

            if (!token) {
                setForm(emptyForm);
                return
            };

            localStorage.setItem("token", token);

            const userResponse = await axios.get("/api/users", {
                headers: {
                    Authorization: token
                }
            });

            setUser(userResponse.data);

            navigate("/profile");
        } catch (error) {
            console.log(error.response.data.error);
            alert(error.response.data.error);
        }
    };

    return ( 
        <section style={{
            marginTop: "20vh",
            marginLeft: "40vw",
        }}>
            <h1 style={{ marginLeft: "5vw", width: "200px", marginBottom: "30px", fontSize: "2em" }}>Login</h1>
            <form onSubmit={handleSubmit} style={{
                width: "inherit",
                display: "flex",
                flexFlow: "row wrap",
                gap: "30px",
                padding: "20px",
                width: "250px",
                backgroundImage: "linear-gradient(to top, snow, powderblue, lightskyblue)",
                borderRadius: "7px"
            }}>
                <label style={{
                    width: "200px",
                    textAlign: "center",
                    fontWeight: "bold",
                }} htmlFor="username">Username: </label>
                <input style={{
                    width: "200px",
                    padding: "10px"
                }} id="username" name="username" type="text" onChange={handleChange} value={form.username}/>

                <label style={{
                    width: "200px",
                    textAlign: "center",
                    fontWeight: "bold",
                }} htmlFor="password">Password: </label>
                <input style={{
                    width: "200px",
                    padding: "10px"
                }} id="password" name="password" type="password" onChange={handleChange} value={form.password}/>

                <button style={{
                    width: "200px",
                    padding: "10px",
                    backgroundImage: "linear-gradient(snow, lightblue, skyblue, dodgerblue)",
                    fontWeight: "bold",
                    color: "royalblue",
                    border: "none",
                    borderRadius: "7px",
                    boxShadow: "2px 3px 3px black",
                    cursor: "pointer"
                }}>Submit</button>
            </form>
        </section>
     );
}
 
export default Login;