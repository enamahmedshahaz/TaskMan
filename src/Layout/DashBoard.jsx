import { FaHouseChimney } from "react-icons/fa6";

import { NavLink, Outlet } from "react-router-dom";

import useUserInfo from "../hooks/useUserInfo";
import { FaTasks } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { RiLogoutBoxFill } from "react-icons/ri";
import { Toaster } from 'react-hot-toast';




const Dashboard = () => {


    const [userInfo, userInfoLoading] = useUserInfo();

    return (
        <div className="flex">

            {/* dashboard side bar */}
            <div className="w-64 bg-teal-100 min-h-screen">

                {/* user info */}
                {
                    userInfoLoading ?
                        <div className="text-center">
                            <p>Loading...</p>
                        </div>
                        :
                        <div className="text-center pt-2">
                            <h2 className="font-bold text-red-300 text-2xl">Welcome</h2>
                            <div className="avatar">
                                <div className="w-16 rounded-full">
                                    <img src={userInfo.photo} />
                                </div>
                            </div>

                            <h3 className="font-bold text-lg">{userInfo.name}</h3>
                            <p className="text-gray-400 text-sm">
                                ({userInfo.email})
                            </p>
                        </div>
                }
                <div className="divider"></div>

                <ul className="menu flex flex-col gap-2 uppercase">

                    <li ><NavLink to="/dashboard/manageTasks">
                        <FaTasks></FaTasks> Manage Tasks
                    </NavLink>
                    </li>

                    <li ><NavLink to="/dashboard/addTask">
                        <FaPlus></FaPlus>Add New Task</NavLink>
                    </li>

                    <div className="divider"></div>

                    <li><NavLink to="/">
                        <FaHouseChimney></FaHouseChimney>Home</NavLink>
                    </li>
                    <li className="text-red-700"><NavLink to="/logout">
                        <RiLogoutBoxFill></RiLogoutBoxFill>Logout</NavLink>
                    </li>

                </ul>
            </div>

            {/* dashboard content */}
            <div className="flex-1">
                <Toaster></Toaster>
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default Dashboard;