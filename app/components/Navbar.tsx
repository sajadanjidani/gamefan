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
                <div>
                    <img alt="logoIcon" src={''}/>
                    <h1></h1>
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