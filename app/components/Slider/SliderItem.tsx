'use client'
import React from "react"

export default class SliderItem extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="min-w-45 h-full rounded-3xl bg-red-400 relative overflow-hidden">
                <img alt="backgroundImage" src={''} className="w-full h-full object-fill opacity-10 absolute -z-10"/>
                <p className="text-center mt-50">{this.props.title}</p>
            </div>
        )
    }
}