'use client'
import React from "react"

export default class ADS extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <section className="container mx-auto h-85 overflow-hidden rounded-r-4xl bg-linear-90 from-blue-950/20 from-50% to-background flex">
                {/* image box */}
                <div className="w-3/10 h-full"></div>
                {/* content */}
                <div className="w-7/10 h-full flex justify-center items-center">
                    <div className="grid justify-center items-center gap-5 w-9/10">
                        <h3 className="font-bold text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, repellat!</h3>
                        <p className="leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta magni dolores qui ut modi vel cupiditate in non explicabo placeat voluptatem eius quas sunt fugit inventore soluta reprehenderit aliquam at repudiandae blanditiis excepturi, facilis aut. Dolorum rem maxime numquam deserunt!</p>
                        <div className="relative md:px-0 px-17">
                            <button className="flex justify-center items-center w-35 h-12 md:left-auto -left-0 rounded-xl absolute mt-3 bg-linear-90 from-purple-600 from-30% to-blue-600 hover:cursor-pointer">Show All Items</button>
                            <div className="w-35 h-12 rounded-xl absolute blur-md -z-10 -left-0.5 mt-3 bg-linear-90 from-purple-600 from-30% to-blue-600"></div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}