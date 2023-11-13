import HomeNavbarAuth from '../../components/navbar/home-navbar-auth/HomeNavbarAuth'
import HomeNavbar from '../../components/navbar/home-navbar/HomeNavbar'
import HomeMainImage from '../../components/home-main-image/HomeMainImage'
import WhatIs from '../../components/home-whatis-card/WhatIs'

const Home = () => {
    if(localStorage.getItem('loggedInUser')) {
        return (
            <>
                <HomeNavbarAuth/>
                <HomeMainImage />
                <WhatIs />
            </>
        )
    } else {
        return (
            <>
                <HomeNavbar/>
                <HomeMainImage />
                <WhatIs />
            </>
        )
    }
        
}

export default Home