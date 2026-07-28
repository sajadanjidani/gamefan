'use client'
import React from "react"
import { IoSearch } from "react-icons/io5";
import { RiMenuSearchLine } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";


export default class Navbar extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            menuStatus : false
        }
    }

    menuHandler = () => {
        this.setState(prevState => {
            return {menuStatus : !prevState.menuStatus}
        })
    }

    render(){
        return(
            <div className="mx-auto flex items-center justify-between h-15 md:mt-10 xl:container w-full px-5 md:px-3">
                <div className="flex items-center xl:gap-10 lg:gap-5">
                    {/* logo */}
                    <div className="flex items-center">
                        <img className="lg:w-15 lg:h-15 md:w-13 md:h-13 sm:w-12 sm:h-12 w-10 h-10" alt="logoIcon" src={'./images/logo.png'}/>
                        <h1 className="font-bold lg:text-3xl md:text-lg sm:text-xl text-xl">
                            <span className="text-blue-400">Ga</span>
                            <span className="text-purple-400">me</span>
                            <span className="text-purple-500">Fan</span>
                        </h1>
                    </div>
                    {/* list */}
                    <ul className="*:font-semibold *:hover:cursor-pointer *:hover:text-blue-300 xl:gap-8 lg:gap-4 md:gap-3 ml-3 lg:text-base md:text-sm sm:text-xs sm:gap-3 sm:ml-5 sm:flex hidden">
                        <li className="text-blue-300">Home</li>
                        <li>Games</li>
                        <li>Console Games</li>
                        <li>Gift Carts</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                {/* search */}
                <form id="Navbar-form" className="items-center px-4 py-2 bg-white/10 rounded-4xl overflow-hidden xl:w-70 lg:w-1/4 md:w-3/11 md:flex hidden">
                    <IoSearch className="size-5"/>
                    <input id="Navbar-input" className="outline-0 ml-3 xl:w-full lg:w-8/10 md:w-6/10" type="text" placeholder="Search ..."/>
                </form>
                {/* hamber Menu */}
                <div className="sm:hidden block">
                    {this.state.menuStatus ? (<IoCloseOutline className="text-purple-400" /> ) : (
                        <RiMenuSearchLine onClick={this.menuHandler.bind(this)} className="text-blue-400 hover:text-purple-400"/>
                    )}
                    {this.state.menuStatus ? (
                    <div>
                        <div className="absolute left-0 top-0 w-2/3 h-dvh bg-blue-950">
                            <ul className="*:font-semibold *:hover:cursor-pointer *:hover:text-blue-300 ml-3 mt-3 *:mt-3">
                                <li className="text-blue-300">Home</li>
                                <li>Games</li>
                                <li>Console Games</li>
                                <li>Gift Carts</li>
                                <li>Blog</li>
                                <li>Contact Us</li>
                            </ul>
                            <form id="Navbar-form" className="flex items-center mt-3 mx-3 px-4 py-2 bg-white/10 rounded-4xl overflow-hidden">
                                <IoSearch className="size-5"/>
                                <input id="Navbar-input" className="outline-0 ml-3 w-9/10" type="text" placeholder="Search ..."/>
                            </form>
                        </div>
                        <div className="absolute right-0 top-0 w-1/3 h-dvh bg-blue-900/20" onClick={this.menuHandler.bind(this)}></div>
                    </div>
                    ) : ''}
                </div>
            </div>
        )
    }
} 