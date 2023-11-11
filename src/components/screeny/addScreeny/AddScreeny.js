import React from 'react'
import HomeNavbarAuth from '../../navbar/home-navbar-auth/HomeNavbarAuth'

function AddScreeny(screenyId) {
    console.log(screenyId);
  return (
    <>
        <HomeNavbarAuth />
        <div>l'id del screeny container è {screenyId.screenyId}</div>
    </>
  )
}

export default AddScreeny