import React, { useContext, useState } from "react";

import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../App";


function Navbar() {

    let { userData, setUserData } = useContext(userContext)


    const [menuOpen, setMenuOpen] = useState(false);


    let navigate = useNavigate()
    let logout = () => {


        setUserData(null)

        navigate('/login')

    }

    return (
        <nav>

            <div className="title">
                <Link to="/">
                    Admin Management System
                </Link>
            </div>

            <div>
                {
                    userData ?
                        <p>Welcome! {userData.email}</p>

                        : null
                }
            </div>

            <div className="menu">
                <ul>
                    <Link to="/">
                        <li>Bussiness</li>
                    </Link>
                    <Link to="/sales">
                        <li>Sales</li>
                    </Link>
                    <Link to="/users">
                        <li>Users</li>
                    </Link>
                    <button to="/logout" onClick={logout}>
                        <li>Logout</li>
                    </button>

                </ul>
            </div>

        </nav>
    );
};

export default Navbar;