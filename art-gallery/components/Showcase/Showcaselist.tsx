import Showcaseitem from "./Showcaseitem";
import Image from "next/image";
export default function Showcaselist(){
    return(
        <main>

<div className="sticky grid grid-rows-3 gap-4 mt-4 mx-3 md:mx-auto" >
    {[1,2,3,4,5,6,7,8].map((number,index)=>(
    <div key={number} className="">
        <Showcaseitem value={index}/>   
    </div>
))} </div>


         
        </main>
    )
}
