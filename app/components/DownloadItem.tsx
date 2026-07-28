'use client'
import React from "react"

export default class DownloadItem extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="w-full h-full relative px-4 flex gap-4 justify-center items-center rounded-3xl border-2 border-b-blue-400 border-t-purple-500 border-l-blue-400 border-r-purple-500">
                <img alt="logoCategory" src={this.props.imageSrc} className="w-16 h-14"/>
                <p className="font-bold">{this.props.title}</p>
            </div>
        )
    }
}