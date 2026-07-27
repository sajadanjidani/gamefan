'use client'
import React from "react"

export default class Header extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <header className="h-dvh">
                {/* bgImage */}
                <img alt="backgroundImage" src={'./images/bgHeader.jpg'} className="w-full h-full object-fill opacity-10 mt-5"/>
                {/* content */}
                
            </header>
        )
    }
}