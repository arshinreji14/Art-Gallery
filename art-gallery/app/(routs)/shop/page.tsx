import ShopHero from '@/components/Hero/shopehero';
import ShopeItemlist from '@/components/Shope/Shopeitemlist';

export default function Shop() {
  return (
    <main className="bg-white">
      <ShopHero/>
      <div className="mx-auto">
     <ShopeItemlist/>
     </div>
    </main>
  )
  }

