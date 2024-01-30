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
        <section>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input id="username" name="username" type="text" onChange={handleChange} value={form.username}/>

                <label htmlFor="password">Password: </label>
                <input id="password" name="password" type="password" onChange={handleChange} value={form.password}/>

                <button>Submit</button>
            </form>
        </section>
     );
}
 
export default Login;