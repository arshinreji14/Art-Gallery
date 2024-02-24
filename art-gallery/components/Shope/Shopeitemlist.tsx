"use client"
import ShopeCardItem from './shopeitem';
import { useEffect, useState } from 'react';
interface images{
  id:number,
  name: string,
  tagline: string,
  image_url: string
}
const page=1
const per_page=20
export default function ShopeItemlist (){
  const [data,setData]=useState<images[]>([])
  useEffect(()=>{
    async function fetchdata(){
      try{
        const response= await fetch(` https://api.punkapi.com/v2/beers?page=${page}&per_page${per_page}`)
        const fetchedata=await response.json()
        setData(fetchedata)
      }
      catch(error){
        console.error("error fetched data",error)
      }

    }
    fetchdata()
  },[])
  return(
    <main>
      <div className='grid  grid-cols-3 gap-6'>
    {data.map((item)=>(
<div key={item.id}>
  <ShopeCardItem value={item}/>
    </div>
      ))
    }
</div>
    </main>
  )

}

