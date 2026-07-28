'use client'
import React from "react"
import DownloadItem from "./DownloadItem"

export default class DownloadBox extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            DownloadItemInfo : [
                {id : 1, title : 'Windows Games', imageSrc : './images/categoryLogos/windowsLogo.png'},
                {id : 4, title : 'Android  Games', imageSrc : './images/categoryLogos/androidLogo.png'},
                {id : 3, title : 'PlayStation Games', imageSrc : './images/categoryLogos/PlayStationLogo.png'},
                {id : 4, title : 'Xbox Games', imageSrc : './images/categoryLogos/xboxLogo.png'},
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