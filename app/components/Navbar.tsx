'use client'
import React from "react"

export default class Navbar extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="w-full h-15 mt-10">
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
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
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