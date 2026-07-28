'use client'
import React from "react"

export default class CategoryBtn extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="py-1 px-4 border-2 rounded-3xl font-semibold border-white">{this.props.title}</div>
        )
    }
}