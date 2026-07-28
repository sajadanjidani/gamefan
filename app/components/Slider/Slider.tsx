'use client'
import React from "react"
// component
import SliderItem from "./SliderItem"
// icons
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";

export default class Slider extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            games : [
                {id : 1 , title : 'Resident Evil' , imageSrc : './images/gameCovers/ResidentEvil.jpg'},
                {id : 2 , title : 'God of War' , imageSrc : './images/gameCovers/GodofWar.jpg'},
                {id : 3 , title : 'Spider Man' , imageSrc : './images/gameCovers/Spiderman.jpg'},
                {id : 4 , title : 'Elden Ring' , imageSrc : './images/gameCovers/EldenRing.jpg'},
                {id : 5 , title : 'Sekiro' , imageSrc : './images/gameCovers/Sekiro.jpg'},
                {id : 6 , title : 'The Crafter' , imageSrc : './images/gameCovers/TheCrafter.jpg'},
                {id : 7 , title : 'GTA San' , imageSrc : './images/gameCovers/GTAsan.jpg'},
                {id : 8 , title : 'Call of Duty' , imageSrc : './images/gameCovers/CallOfDuty.jpg'},
                {id : 9 , title : 'GTA V' , imageSrc : './images/gameCovers/GTAV.jpg'},
                {id : 10 , title : 'MineCraft' , imageSrc : './images/gameCovers/MineCraft.jpg'},
                {id : 11 , title : 'Fortnite' , imageSrc : './images/gameCovers/Fortnigt.jpg'},
                {id : 12 , title : 'CSgo' , imageSrc : './images/gameCovers/CSgo.jpg'},
            ]
        }
    }

    render(){
        return(
            <section className="container xl:px-0 px-5 mx-auto h-60 mb-30">
                {/* top side */}
                <div className="w-full h-20 flex justify-between items-center">
                    <h3 className="sm:text-2xl text-nowrap font-bold ">{this.props.catrgoryTitle}</h3>
                    <div className="w-60 h-3/5 sm:gap-5 gap-2 flex justify-end items-center">
                        <span className="text-purple-400 text-shadow-lg text-shadow-purple-900 hover:cursor-pointer hover:text-blue-400 hover:text-shadow-blue-900 sm:text-base text-sm">Show More</span>
                        <div className="flex justify-center items-center gap-2">
                            <button className="px-2 py-2 rounded-md bg-gray-600 hover:bg-gray-500 hover:cursor-pointer"><IoChevronBackOutline /></button>
                            <button className="px-2 py-2 rounded-md bg-gray-600 hover:bg-gray-500 hover:cursor-pointer"><IoChevronForward /></button>
                        </div>
                    </div>
                </div>
                {/* slider side */}
                <div className="w-full h-auto flex gap-10 overflow-x-hidden flex-nowrap">
                    {this.state.games.map(game => <SliderItem key={game.id} {...game}/>)}
                </div>
            </section>
        )
    }
}