'use client'
import React from "react"
import { IoSearch } from "react-icons/io5";


export default class Navbar extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="flex items-center justify-between w-full h-15 mt-10">
                <div className="flex items-center gap-10">
                    {/* logo */}
                    <div className="flex items-center">
                        <img className="w-15 h-15" alt="logoIcon" src={'./images/logo.png'}/>
                        <h1 className="text-3xl font-bold">
                            <span className="text-blue-400">Ga</span>
                            <span className="text-purple-400">me</span>
                            <span className="text-purple-500">Fan</span>
                        </h1>
                    </div>
                    {/* list */}
                    <ul className="flex gap-8 *:font-semibold *:hover:cursor-pointer *:hover:text-blue-300">
                        <li className="text-blue-300">Home</li>
                        <li>Games</li>
                        <li>Console Games</li>
                        <li>Gift Carts</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                {/* search */}
                <form id="Navbar-form" className="flex items-center w-70 gap-3 px-4 py-2 bg-white/10 rounded-4xl overflow-hidden">
                    <IoSearch className="size-5"/>
                    <input id="Navbar-input" className="outline-0 shadow-white" type="text" placeholder="Search ..."/>
                </form>
            </div>
        )
    }
} 