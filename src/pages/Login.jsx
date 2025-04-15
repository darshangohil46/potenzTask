import React, { useState, useEffect } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState([])
    const [user, setUser] = useState([])

    const handleSubmitForm = (e) => {
        e.preventDefault()
        let details = data["users"]
        if (details) {
            for (let i = 0; i < details.length; i++) {
                const element = details[i];
                if (email === element["email"] && password === element["password"]) {
                    alert("Login Done")
                    setUser(element)
                    localStorage.setItem("User", JSON.stringify(element));
                    const user = JSON.parse(localStorage.getItem("User"));
                    console.log(user);
                    navigate("/")
                    window.location.reload()
                }
                else {
                    alert("Login Fail")
                }
                break;
            }
        }
    }

    async function fetchData() {
        try {
            const response = await axios.get("https://dummyjson.com/users");
            setData(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <>
            <div className="container">
                <div style={{
                    maxWidth: "400px",
                    margin: "100px auto",
                }}>
                    <h2 className="text-center mb-4">Login</h2>
                    <form onSubmit={handleSubmitForm}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary w-100">Login</button>
                        </div>
                    </form>
                </div>
            </div >
        </>
    )
}
