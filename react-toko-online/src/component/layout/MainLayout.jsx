import React from 'react'
import Header from './Heade'
import Footer2 from './footer/Footer'

const MainLayout = ({children , showHeader = true}) => {
  return (
    <>
        {showHeader && <Header />}
            {children}
        <Footer2/>
    </>
  )
}
export default MainLayout
