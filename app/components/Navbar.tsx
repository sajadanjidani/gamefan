'use client'
import React from "react"

export default class Navbar extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="flex items-center gap-10 w-full h-15 mt-10">
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
                {/* search */}
                <form>
                    <input type="submit"/>
                    <input type="text" />
                </form>
            </div>
        )
    }
} 