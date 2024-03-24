import { useState,useEffect } from 'react';
import { MdSearch } from "react-icons/md";
import SearchItem from './searchitem';
import Datas from '@/app/schema/data';
export default function SearchItemList(){
  const page =1
const per_page =5
const [inputValue, setInputValue] = useState('');
console.log(inputValue);
const [data, setData]=useState<Datas[]>([])
useEffect(()=>{
    async function fetchData(){
        try{
            const response=await
            fetch(`http://localhost:3000/product`)

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

// data filtering
const [filteredData, setFilteredData] = useState<Datas[]>([]);
const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const value = event.target.value;
  setInputValue(value);


  // Filter beer data based on input value
  const filteredData = data.filter(data =>
      data.title.toLowerCase().includes(event.target.value.toLowerCase())
  );

  // Update filtered beer data
  setFilteredData(filteredData);
};
console.log(filteredData);

  return(
<div>
    <div className='w-full h-auto'>
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 "   >
                <MdSearch size={25} />
                <span className="sr-only">Search icon</span>
              </div>
              <div>
              <input
                  value={inputValue}
                  onChange={handleInputChange}
                  type="text"
                  id="search-navbar"
                  className=" w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."   ></input>
                  </div>

<div className='w-full'>
{
  filteredData.map((item)=>(
<div key={item.id} className='' >
<SearchItem value={item}/>
</div>
  )
  )
}
</div>




    </div>
    </div>

  )
}
