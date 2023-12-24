import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {

    const { user, signOutUser } = useAuth();

    const navLinks =
        <>
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>

            <li>
                <NavLink to={"/dashboard/ManageTasks"}>Manage Tasks</NavLink>
            </li>
            
            {
                !user &&
                <>
                    <li>
                        <NavLink to={"/login"}>Login</NavLink>
                    </li>

                    <li>
                        <NavLink to={"/register"}>Register</NavLink>
                    </li>

                </>
            }
        </>;

    const handleLogout = () => {

        signOutUser()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Sign-out successful",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Error while Sign-out!",
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    }

    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">TaskMan</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user &&
                    <button className="btn btn-error" onClick={handleLogout}>Logout</button>
                }
            </div>
        </div>

    );
};

export default Navbar;