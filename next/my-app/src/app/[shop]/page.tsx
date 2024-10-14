import Link from "next/link"
import React from "react"

function Dynamic({params}:{params:{shop:string}}){
    const shops: any = {
        Burger:{
            name:"Burger Lab",
            location:"Gulshan",
            branches:"3",
        },
        Pizza:{
            name:"Big pizza",
            location:"clifton",
            branches:1,
        },

            BBQ:{name:"pionner",
            location:"Hussainabad",
            branches:7,
        }
    }
    const shops_data = shops[params.shop]
    return(
    <div>
        
        <h1 style={{background:"gray"}}><b className="text-violet-600">Brand:</b> {shops_data.name}</h1>
       
        <h1><b className="text-red-600">location:</b> {shops_data.location}</h1>
       
        <h1><b className="text-yellow-600">branches:</b> {shops_data.branches}</h1>
    </div>
)}



export default Dynamic;