import Datas from '@/app/schema/data'
import Image from 'next/image'

type SearchItemprps={
value:Datas
}
const SearchItem:React.FC<SearchItemprps>=({value})=>{


  return(
    <div>
      <div className=" w-full h-10 ">
<div className='grid grid-cols-7'>
  <div className='col-span-1  relative w-10 h-10  border-4 border-black '>
<Image src={value.image} alt=''fill
/>
  </div>
  <div className='col-span-3 '>
<h1>{value.title}</h1>
  </div>
  <div className='col-span-3 '>
<h1>{value.description}</h1>
  </div>
</div>

      </div>
    </div>
  )
}
export default SearchItem;
