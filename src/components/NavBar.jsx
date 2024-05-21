import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const NavBar = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="w-full flex justify-between items-center font-semibold">
                <div className="flex items-center gap-2">
                    <img
                        onClick={() => navigate(-1)}
                        className="w-8 bg-black p-2 rounded-2xl cursor-pointer "
                        src={assets.arrow_left}
                        alt="arrow_left"
                    />
                    <img
                        onClick={() => navigate(1)}
                        className="w-8 bg-black p-2 rounded-2xl cursor-pointer "
                        src={assets.arrow_right}
                        alt="arrow_right"
                    />
                    {props.search ? (
                        <div className="flex items-center justify-center">
                            <div className="flex rounded-full bg-[#0d1829] px-2 w-full max-w-[700px]">
                                <button
                                    type="submit"
                                    className="relative p-2 bg-[#0d1829] rounded-full">
                                    <img
                                        className="w-5"
                                        src={assets.search_icon}
                                        alt="search_icon"
                                    />
                                </button>
                                <input
                                    type="text"
                                    className="w-full bg-[#0d1829] flex bg-transparent pl-2 text-[#cccccc] outline-0"
                                    placeholder="What do you want to play?"
                                />
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <div className="flex items-center gap-4">
                    <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
                        Explore Premium
                    </p>
                    <p className="bg-black text-[15px] px-3 py-1 rounded-2xl cursor-pointer">
                        Install App
                    </p>
                    <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
                        H
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
                    All
                </p>
                <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">
                    Music
                </p>
                <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">
                    Podcast
                </p>
            </div>
        </>
    );
};

export default NavBar;
