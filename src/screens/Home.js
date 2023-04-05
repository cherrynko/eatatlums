import React from 'react'
import HomeNavbar from '../components/Home_Navbar'
import EateriesMainContent from '../components/EateriesMainContent';
export default function Home() {

  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <div>
      <div><HomeNavbar /></div>
      {isLoggedIn && (
        <div>
          <EateriesMainContent />
        </div>
      )}


    </div>
  )
}
