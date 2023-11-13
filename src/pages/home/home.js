import HomeNavbarAuth from '../../components/navbar/home-navbar-auth/HomeNavbarAuth'
import HomeNavbar from '../../components/navbar/home-navbar/HomeNavbar'
import HomeMainImage from '../../components/home-main-image/HomeMainImage'
import WhatIs from '../../components/home-whatis-card/WhatIs'
import StartScreeny from '../../components/start-screeny/StartScreeny'
import Footer from '../../components/footer/Footer'

const Home = () => {
    if(localStorage.getItem('loggedInUser')) {
        return (
            <>
                <HomeNavbarAuth/>
                <HomeMainImage />
                <WhatIs />
                <StartScreeny />
                <Footer/>
            </>
        )
    } else {
        return (
            <>
                <HomeNavbar/>
                <HomeMainImage />
                <WhatIs />
                <StartScreeny />
                <Footer/>
            </>
        )
    }
        
}

export default Home