"use client"
import ShopeCardItem from './shopeitem';
import { useEffect, useState } from 'react';
import Datas from '@/app/schema/data';
import Link from 'next/link';
const page=1
const per_page=20
export default function ShopeItemlist (){
  const [data,setData]=useState<Datas[]>([])
  const handleAddToCart = () => {

  
  };
  useEffect(()=>{
    async function fetchdata(){
      try{
        const response= await fetch(`http://localhost:4000/api/products`)
        const fetchedata=await response.json()
        setData(fetchedata)
      }
      catch(error){
        console.error("error fetched data",error)
      }

    }
    fetchdata()
  },[])
  console.log(data);

  return(
    <main>
      <div className='grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 xl:grid-cols-5 gap-4  mt-10 mx-10'>
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

