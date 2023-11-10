import React from 'react'
import { useParams } from 'react-router-dom'
import HomeNavbarAuth from '../../components/navbar/home-navbar-auth/HomeNavbarAuth';

const Screeny = () => {

    const {id} = useParams()
    console.log(id);

  return (
    <>
        <HomeNavbarAuth />
        <div>screeny</div>
    </>
  )
}

export default Screeny