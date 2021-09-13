import React, { useState } from "react";
import { Link } from 'react-router-dom'
const Sidenav = () => {
    const [search, setSearch] = useState("")
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <div class="container-fluid">
                    <Link class="navbar-brand text-white" to="/">Recepe App</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link text-white text-center" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Chicken" className="nav-link text-white text-center">
                                    Chicken
                                </Link>
                            </li>
                            <li>
                                <Link to="/Mutton" className="nav-link text-white text-center">
                                    Mutton
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Fish" className="nav-link text-white text-center">
                                    Fish
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Chineese" className="nav-link text-white text-center">
                                    Chineese
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/additem" className="nav-link text-white text-center">
                                    Add Item
                                </Link>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) =>{setSearch(e.target.value)}} />
                            <Link class="btn btn-outline-success" to={`/search/${search}`} >Search</Link>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
};
export default Sidenav