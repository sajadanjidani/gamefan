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
                {id : 1 , title : 'Resident Evil' , imageSrc : ''},
                {id : 2 , title : 'God of War' , imageSrc : ''},
                {id : 3 , title : 'Spider Man' , imageSrc : ''},
                {id : 4 , title : 'Elden Ring' , imageSrc : ''},
                {id : 5 , title : 'Sekiro' , imageSrc : ''},
                {id : 6 , title : 'The Crafter' , imageSrc : ''},
                {id : 7 , title : 'GTA San' , imageSrc : ''},
                {id : 8 , title : 'Call of Duty' , imageSrc : ''},
                {id : 9 , title : 'GTA V' , imageSrc : ''},
                {id : 10 , title : 'MineCraft' , imageSrc : ''},
                {id : 11 , title : 'FortNight' , imageSrc : ''},
                {id : 12 , title : 'CSgo' , imageSrc : ''},
            ]
        }
    }

    render(){
        return(
            <section className="container mx-auto h-60 mb-30">
                {/* top side */}
                <div className="w-full h-20 flex justify-between items-center">
                    <h3 className="text-2xl font-bold">Updated Games</h3>
                    <div className="w-60 h-3/5 gap-5 flex justify-center items-center">
                        <span className="text-purple-400 text-shadow-lg text-shadow-purple-900 hover:cursor-pointer hover:text-blue-400 hover:text-shadow-blue-900">Show More</span>
                        <div className="flex justify-center items-center gap-2">
                            <button className="px-2 py-2 rounded-md bg-gray-600 hover:bg-gray-500 hover:cursor-pointer"><IoChevronBackOutline /></button>
                            <button className="px-2 py-2 rounded-md bg-gray-600 hover:bg-gray-500 hover:cursor-pointer"><IoChevronForward /></button>
                        </div>
                    </div>
                </div>
                {/* slider side */}
                <div className="w-full h-full flex gap-10 overflow-hidden flex-nowrap">
                    {this.state.games.map(game => <SliderItem key={game.id} {...game}/>)}
                </div>
            </section>
        )
    }
}