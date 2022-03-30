import { Route, Routes } from 'react-router'
import style from './App.module.scss'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './Page/Home/Home'
import OurWorks from './Page/OurWorks/OurWorks'
import Beton from './Page/Beton/Beton'
import Solutions from './Page/Solutions/Solutions'
import Delivery from './Page/Delivery/Delivery'
import Contacts from './Page/Contacts/Contacts'
import Calculations from './Page/Сalculations/Сalculations'

function App() {
  return (
    <div className={style.app}>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<OurWorks />} path="/our_works" />
        <Route element={<Beton />} path="/beton" />
        <Route element={<Solutions />} path="/solutions" />
        <Route element={<Delivery />} path="/delivery" />
        <Route element={<Contacts />} path="/contacts" />
        <Route element={<Calculations />} path="/calculations" />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
