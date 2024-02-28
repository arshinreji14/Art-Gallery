
import Image from 'next/image';
import Link from 'next/link';
interface images{
  id:number,
  name: string,
  tagline: string,
  image_url: string
}
type ShopCardItemProps = {
  value: images
};
const ShopeCardItem:React.FC<ShopCardItemProps>=({value})=>{

  return(
    <div>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className='w-[15rem] h-[10rem] relative'>
        <Image className="rounded-t-lg" src={value.image_url|| ""} alt="" fill
         objectFit='fit'/>
     </div>
    <div className="p-5">
        <Link href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{value.name}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{value.tagline}</p>
        <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative">
            Read more

        </Link>
    </div>
</div>

    </div>
  )

}
export default ShopeCardItem
