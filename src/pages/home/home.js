import HomeNavbarAuth from '../../components/navbar/home-navbar-auth/HomeNavbarAuth'
import HomeNavbar from '../../components/navbar/home-navbar/HomeNavbar'
import HomeMainImage from '../../components/home-main-image/HomeMainImage'
import WhatIs from '../../components/home-whatis-card/WhatIs'
import StartScreeny from '../../components/start-screeny/StartScreeny'

const Home = () => {
    if(localStorage.getItem('loggedInUser')) {
        return (
            <>
                <HomeNavbarAuth/>
                <HomeMainImage />
                <WhatIs />
                <StartScreeny />
            </>
        )
    } else {
        return (
            <>
                <HomeNavbar/>
                <HomeMainImage />
                <WhatIs />
                <StartScreeny />
            </>
        )
    }
        
}

export default Home