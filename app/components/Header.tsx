'use client'
import React from "react"
// component
import CategoryBtn from "./CategoryBtn"

export default class Header extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            CategoryInfo : [
                {id : 1 , title : 'Shooting'},
                {id : 2 , title : 'Action'},
            ]
        }
    }

    render(){
        return(
            <header className="h-dvh mt-5 relative">
                {/* bgImage */}
                <img alt="backgroundImage" src={'./images/bgHeader.jpg'} className="w-full h-full object-fill opacity-10 absolute -z-10"/>
                {/* content */}
                <div className="h-full flex ">
                    <div className="w-2/6 h-full ml-10 flex justify-center items-center">
                        <img alt="imageCover" src={'./images/gameCovers/CyberpunkCover.jpg'} className="w-9/10 h-9/10 overflow-hidden rounded-md shadow-2xl shadow-purple-800" />
                    </div>
                    <div className="flex justify-center items-center w-4/6 h-full">
                        <div className="grid grid-rows-2 w-4/5">
                            <h2 className="text-5xl font-bold">CyberPunk</h2>
                            <div className="flex justify-end items-center gap-3">
                                {this.state.CategoryInfo.map(category => <CategoryBtn key={category.id} {...category} /> )}
                            </div>
                            <p className="leading-7 mt-3">A novice mercenary fighting for survival in a brutal reality, one day this hero, by carrying out one of the orders, acquires a chip that hides the secret of immortality, and with this he intends to become one of the most powerful cyberpunks. We can create the main character, such as gender, appearance, origin of the character, and provide additional options for the mission.</p>
                            <div className="relative">
                                <button className="w-30 h-12 rounded-xl absolute z-10 mt-3 bg-linear-90 from-purple-600 from-30% to-blue-600 hover:cursor-pointer">Download</button>
                                <div className="w-30 h-12 rounded-xl absolute blur-md -left-0.5 mt-3 bg-linear-90 from-purple-600 from-30% to-blue-600"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}