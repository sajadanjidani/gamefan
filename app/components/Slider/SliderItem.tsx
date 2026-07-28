'use client'
import React from "react"

export default class SliderItem extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="min-w-45 h-full mb-10 rounded-3xl relative overflow-hidden shadow-lg shadow-purple-950">
                <img alt="backgroundImage" src={this.props.imageSrc} className="w-full h-full object-fill absolute -z-10"/>
                <p className="text-center font-bold mt-50 mb-3">{this.props.title}</p>
            </div>
        )
    }
}