"use client"
import { useEffect, useState } from 'react';
import Showcaseitem from "./Showcaseitem";
import Image from "next/image";
const page =1
const per_page =5
interface images{
    id:number,
    image: string,
    title: string,
    description: string
}
export default function Showcaselist(){
    const [data, setData]=useState<images[]>([])
    useEffect(()=>{
        async function fetchData(){
            try{
                const response=await
                fetch(` http://localhost:3000/product`)

                const fetchedData = await response.json();
    console.log(fetchedData);
     setData(fetchedData)
            }
            catch(error){
                console.error('Error fetching data',error)
            }
        }
fetchData();
    },[] )
console.log(data);

    return(
        <main>

<div className="sticky grid grid-rows-3 gap-4 mt-4 mx-3 md:mx-auto" >
    {data.map((item)=>(

    <div key={item.id} className="">
        <Showcaseitem value={item}/>
    </div>
))} </div>



        </main>
    )
}
