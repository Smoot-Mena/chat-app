import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

let emptyForm = {
    username: "",
    password: "",
    email: ""
};

const SignUp = ( {setUser} ) => {

    const navigate = useNavigate();

    let [form, setForm] = useState(emptyForm);

    const handleChange = (event) => {
        setForm( {...form, [event.target.name]: event.target.value} );
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("/auth/signup", form);
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
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Create Username: </label>
                <input id="username" name="username" type="text" onChange={handleChange} value={form.username}/>

                <label htmlFor="email">What's Your Email?: </label>
                <input id="email" name="email" type="email" onChange={handleChange} value={form.email}/>

                <label htmlFor="password">Create Password: </label>
                <input id="password" name="password" type="password" onChange={handleChange} value={form.password}/>

                <button>Submit</button>
            </form>
        </section>
     );
}
 
export default SignUp;