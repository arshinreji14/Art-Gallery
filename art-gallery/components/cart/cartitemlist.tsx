"use client"
import { useEffect, useState } from 'react';
import Datas from '@/app/schema/data';
import CartItem from './cartitem';
import Checkout from '../checkout/checkout';
const page=1
const per_page=20
export default function Cartitemlist (){
  const [data,setData]=useState<Datas[]>([])

const [showCheckout,setCheckout]= useState(false);
const handlecheckout=()=>{
setCheckout(true)
}
const handleCloseCheckout = () => {
  setCheckout(false);
};
  useEffect(()=>{
    async function fetchdata(){
      try{
        const response= await fetch(`http://localhost:4000/api/cart`)
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

const totalPrice= data.map((item)=>(
  item.price
))

const total = totalPrice.reduce((acc, curr) => acc + curr, 0);
console.log("Total price:", total);
  return(
    <main>
      <div className="container mx-auto mt-10">
        {showCheckout&&(
         <div className='absolute inset-0 flex justify-center items-center bg-gray-800 bg-opacity-90 z-90'>
         <div className="bg-white p-6 rounded-lg">
           <button
             className='absolute top-2 right-2 text-gray-500 hover:text-red-500'
             onClick={(e) => {
               e.stopPropagation();
               handleCloseCheckout(); // Close the checkout card
             }}
           >
             Close
           </button>
           <div className='flex justify-center'>
             <Checkout value={total}/>
           </div>
         </div>
       </div>
        ) }
  <h1 className="text-2xl font-semibold mb-5 justify-items-center">Shopping Cart</h1>
  <div className="">
    <table className=" md:w-auto shadow-md rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-gray-200 text-left">
          <th className="px-4 py-2">Image</th>
          <th className="px-4 py-2">Product</th>
          <th className="px-4 py-2">Price</th>

        </tr>
      </thead>
      <tbody className='w-auto' id="cart-items">

{data.map((item)=>(
  <div key={item.id}>
    <CartItem value={item}/>
      </div>
        ))
      }
        </tbody>
    </table>

    <div className="flex mt-10 justify-end">
      <button onClick={handlecheckout} className="text-white bg-blue-500 hover:bg-blue-700 font-medium text-sm px-5 py-2 rounded-full transition duration-200 ease-in-out">Checkout</button>
    </div>
  </div>
</div>
    </main>
  )

}

