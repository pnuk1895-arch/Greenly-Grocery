import TopBar  from '../../component/CommonComponents/TopBar.jsx'
import HeroSection from '../../component/HomeComponents/2.HeroSection.jsx'
import PerkSection from '../../component/HomeComponents/3.PerkSection.jsx'
import CategoriesSection from '../../component/HomeComponents/4.CategoriesSection.jsx'
import PopularProducts from '../../component/HomeComponents/4.PopularProducts.jsx'
import DealOfDay from '../../component/HomeComponents/5.DealOfTheDay.jsx'
import RecipesSection from '../../component/HomeComponents/6.OtherServices.jsx'
import CustomerReviews from '../../component/HomeComponents/7.CustomerReviews.jsx'
import Footer from '../../component/CommonComponents/FooterSection.jsx'

export default function HomePage(){
    return(
        
    <div className='w-full'>
        {/* header  */}
         <TopBar/>
        {/* <!-- Main --> */}
        <main>
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