import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';

interface Data {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

type CartItemProps = {
  value: Data;
};

const CartItem: React.FC<CartItemProps> = ({ value }) => {
  const handileRemove = async () => {
    try {
      const response = await axios.delete(`http://localhost:4000/api/cart/${value.id}`);
      console.log('API response:', response.data);
    } catch (error) {
      console.error('Error removing from cart (API):', error); // Handle errors
    }
  };

  return (
    <tr className="border-b border-gray-200 flex space-x-4 h-32">
      <td className="py-2  h-32">
        <div className='relative'>
          <Image src={`${value.image}.jpg`} alt={value.title} fill objectFit='fit' className=" rounded-lg 4 " />
          <span className="text-base font-medium text-white">{value.title}</span>
        </div>
      </td>
      <td className='px-4 py-2'>{value.title}</td>
      <td className="px-4 py-2 text-right text-base font-medium">${value.price}</td>
      <td className="px-4 py-2 text-right">
        <button onClick={handileRemove} className="text-red-500 hover:text-red-700 font-bold px-2 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Remove</button>
      </td>
    </tr>
  );
};

export default CartItem;
