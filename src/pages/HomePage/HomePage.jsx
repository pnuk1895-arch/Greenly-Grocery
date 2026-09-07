import TopBar  from '../../component/HomeComponents/TopBar.jsx'
import HeroSection from '../../component/HomeComponents/HeroSection.jsx'
import PerkSection from '../../component/HomeComponents/PerkSection.jsx'
import CategoriesSection from '../../component/HomeComponents/CategoriesSection.jsx'
import PopularProducts from '../../component/HomeComponents/PopularProducts.jsx'
import DealOfDay from '../../component/HomeComponents/DealOfTheDay.jsx'
import RecipesSection from '../../component/HomeComponents/OtherServices.jsx'
import CustomerReviews from '../../component/HomeComponents/customerReviews.jsx'
import Footer from '../../component/HomeComponents/FooterSection.jsx'

export default function HomePage(){
    return(
        
    <div className='w-full'>
        {/* header  */}
         <TopBar/>
        {/* <!-- Main --> */}
        <main className='w-full m-auto '>
            <HeroSection/>
            <PerkSection/>
            <CategoriesSection/>
            <PopularProducts/>
            <DealOfDay/>
            <RecipesSection/>
            <CustomerReviews/>
        </main>   
        {/* footer     */}
        <Footer/>
    </div>
    )
}