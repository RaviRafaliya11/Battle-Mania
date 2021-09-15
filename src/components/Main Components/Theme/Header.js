import { Link } from "react-router-dom";
import { useState } from "react";

function logout(){
    localStorage.clear()
    window.location.href = '/login'
}

function Header() {
    const [active, setActive] = useState(false);
    const handleClick = () => { setActive(!active)}
    const isuserLoggedin = localStorage.getItem("status")

    return (
        <>
            <nav className="flex items-center flex-wrap bg-navbar-900 p-3 sticky top-0 w-full z-10 shadow-2xl">
                <div className="inline-flex items-center p-1 ml-20">
                    <Link to="/"><img alt="content" src="images/logo.png" /></Link>
                </div>

                <button className=" inline-flex p-2 mr-5 ring-1 ring-white ring-opacity-50 rounded lg:hidden text-white ml-auto hover:text-white outline-none" onClick={handleClick}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
                <div className={`${active ? "" : "hidden"}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
                    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto mr-24">
                        <Link to="/signup"><div className="lg:inline-flex lg:w-auto w-full mx-2 py-2 rounded text-gray-400 text-sm items-center justify-center hover:text-white ">Sign Up</div></Link>

                        <Link to="/">
                            <div className="lg:inline-flex lg:w-auto w-full mx-2 py-2 rounded text-gray-400 text-sm items-center justify-center hover:text-white ">Home</div>
                        </Link>

                        <Link to="/installguide"><div className="lg:inline-flex lg:w-auto w-full mx-2 py-2 rounded text-gray-400 text-sm items-center justify-center hover:text-white">How To Install</div></Link>

                        <div className="lg:inline-flex lg:w-auto w-full mx-2 py-2 rounded text-gray-400 text-sm items-center justify-center hover:text-white">
                            <ul className="flex flex-wrap">
                                <li className="group">
                                    <div className="flex items-center">
                                        <p>About Us</p>
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </p>
                                    </div>

                                    <ul className="absolute hidden group-hover:block bg-navbar-900 rounded-xl">
                                        <Link to="/about">
                                            <li className=" px-5 py-1.5 hover:bg-orange-900 whitespace-no-wrap">About Us</li>
                                        </Link>
                                        <Link to="/privacypolicy">
                                            <li className=" px-5 py-1.5 hover:bg-orange-900 whitespace-no-wrap ">Privacy Policy</li>
                                        </Link>
                                        <Link to="/terms">
                                            <li className=" px-5 py-1.5 hover:bg-orange-900 rounded-b-xl whitespace-no-wrap">Tearms Condition</li>
                                        </Link>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <Link to="/contact"><div className="lg:inline-flex lg:w-auto w-full mx-2 py-2 rounded text-gray-400 text-sm items-center justify-center hover:text-white">Contact</div></Link>

                        <div className="lg:inline-flex lg:w-auto w-full mx-2 py-2 rounded text-gray-400 text-sm items-center justify-center hover:text-white">
                            <ul className="flex flex-wrap">
                                <li className="group">
                                    <div className="flex items-center">
                                        <p>Account</p>
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </p>
                                    </div>

                                    {isuserLoggedin ?   <ul className="absolute hidden rounded-xl group-hover:block bg-navbar-900">
                                        <Link to="/account">
                                            <li className=" px-5 py-1.5 hover:bg-orange-900 whitespace-no-wrap">Dashboard</li>
                                        </Link>
                                        
                                        <li onClick={logout} className=" px-5 py-1.5 hover:bg-orange-900 rounded-b-xl whitespace-no-wrap ">Logout</li>
                                        
                                    </ul>               
                                                        : <ul className="absolute hidden rounded-xl group-hover:block bg-navbar-900">
                                                        <Link to="/login">
                                                            <li className=" px-5 py-1.5 hover:bg-orange-900 whitespace-no-wrap">Login</li>
                                                        </Link>
                                                        <Link to="/signup">
                                                            <li className=" px-5 py-1.5 hover:bg-orange-900 rounded-b-xl whitespace-no-wrap ">Register</li>
                                                        </Link>
                                                    </ul>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
