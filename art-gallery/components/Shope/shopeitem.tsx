import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
}

type ShopCardItemProps = {
  value: Product;
};

const ShopCardItem: React.FC<ShopCardItemProps> = ({ value }) => {
  const handileAddToCart = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/cart', value);
      console.log('API response:', response.data); // Handle successful response (optional)
    } catch (error) {
      console.error('Error adding to cart (API):', error); // Handle errors
    }
  };

  return (
    <div>
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-60 h-96 hover:rotate-1 transform transition duration-800">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80 ">
          <Image className="rounded-t-lg" src={`${value.image}.jpg` || ""} alt="" fill objectFit='fit' />
        </div>
        <div className="p-6 text-center">
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {value.title}
          </h4>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handileAddToCart}>
            Add To Cart
          </button>
        </div>
        <div className="flex justify-center p-6 pt-2 gap-7"></div>
      </div>
    </div>
  );
};

export default ShopCardItem;
