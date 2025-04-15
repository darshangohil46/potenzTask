import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
    const navigate = useNavigate()

    function logout() {
        const ask = confirm("Are you sure to logout?")
        if (ask) {
            localStorage.removeItem("User")
            window.location.reload()
            navigate("/login")
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Welcome</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/product">Product</a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button className="nav-link active" aria-current="page" onClick={logout}>Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
