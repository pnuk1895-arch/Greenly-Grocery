import './HomePage.css'
import TopBar  from '../../component/HomeComponents/TopBar.jsx'
// import SideBar from '../../component/HomeComponents/SideBar.jsx'
import HeroSection from '../../component/HomeComponents/HeroSection.jsx'
// import PerkSection from '../../component/HomeComponents/PerkSection.jsx'
import CategoriesSection from '../../component/HomeComponents/CategoriesSection.jsx'
import BestSellingProduct from '../../component/HomeComponents/BestSellingProduct.jsx'

export default function HomePage(){
    return(
        
    <div className='HomeContainer'>
         <TopBar/>
         {/* <!-- Body --> */}
        <div className="body-layout">
            {/* <!-- Main --> */}
            <main className="main">
                <HeroSection/>
                {/* <PerkSection/> */}
                <CategoriesSection/>
                <BestSellingProduct/>
            </main>
        </div>
    </div>
    )
}