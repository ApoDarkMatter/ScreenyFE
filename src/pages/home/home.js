import HomeNavbarAuth from '../../components/navbar/home-navbar-auth/HomeNavbarAuth'
import HomeNavbar from '../../components/navbar/home-navbar/HomeNavbar'

const Home = () => {
    if(localStorage.getItem('loggedInUser')) {
        return (
            <>
                <HomeNavbarAuth/>
            </>
        )
    } else {
        return (
            <>
                <HomeNavbar/>
            </>
        )
    }
        
}

export default Home