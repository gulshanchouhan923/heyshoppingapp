import React, { Fragment } from 'react'

import Navbar from '../HeaderSection/FooterSection/Navbar'
import Footer from '../HeaderSection/FooterSection/Footer'
import MenuSection from '../HeaderSection/MenuSection'

function Home() {
  return (
   <Fragment>
    <Navbar />
    <MenuSection />
    <Footer />
   </Fragment>
  )
}

export default Home