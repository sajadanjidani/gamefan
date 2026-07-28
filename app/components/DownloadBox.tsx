'use client'
import React from "react"
import DownloadItem from "./DownloadItem"

export default class DownloadBox extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            DownloadItemInfo : [
                {id : 1, title : '', imageSrc : ''},
                {id : 2, title : '', imageSrc : ''},
                {id : 3, title : '', imageSrc : ''},
                {id : 4, title : '', imageSrc : ''},
            ]
        }
    }

    render(){
        return(
            <div className="w-9/10 h-50 mx-auto py-11 gap-15 flex justify-evenly items-center">

            </div>
        )
    }
}