import cartData from '@/cartdata';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { mergeData } from '@/cartdata';
interface images{
  id:number,
  image: string,
  title: string,
  description: string
}
type ShopCardItemProps = {
  value: images
};
const ShopeCardItem:React.FC<ShopCardItemProps>=({value})=>{
  const [cartItems, setCartItems] = useState<images[]>([]);
  const addToCart = () => {
    // Add the current item to the cart items array
    setCartItems(prevCartItems => [...prevCartItems, value]);




  };
cartData.push(...cartItems)
const mergedData = [...cartData, ...cartItems];
console.log(mergedData);

  return(
    <div>
<div className="max-w-[15rem] max-h-[17rem]  h-[11rem] w-[10rem] sm:h-[13rem]  sm:w-[12rem] lg:w-[14rem] lg:h-[15rem] bg-white border border-gray-200 rounded-lg shadow  dark:border-black">
    <div className='max-w-[15rem] max-h-[17rem]  h-[11rem] w-[10rem] sm:h-[13rem]  sm:w-[12rem] lg:w-[14rem] lg:h-[15rem] relative'>
        <Image className="rounded-t-lg" src={value.image|| ""} alt="" fill
         objectFit='fit'/>
           {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{value.name}</h5>
           <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{value.tagline}</p> */}
     </div>
</div>
    </div>
  )

}
export default ShopeCardItem
