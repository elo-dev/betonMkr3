import React from 'react'
import { Divider } from 'antd'

import MainBanner from '../../components/MainBanner/MainBanner'
import Info from '../../components/Info/Info'
import Price from '../../components/Price/Price'
import Checkout from '../../components/Checkout/Checkout'
import TypeBetonanasos from '../../components/TypeBetonanasos/TypeBetonanasos'
import Advice from '../../components/Advice/Advice'
import Strengths from '../../components/Strengths/Strengths'
import InfoAboutBeton from '../../components/InfoAboutBeton/InfoAboutBeton'
import InfoBetonParametrs from '../../components/InfoBetonParametrs/InfoBetonParametrs'
import ConcreteFiller from '../../components/ConcreteFiller/ConcreteFiller'
import TypesBinders from '../../components/TypesBinders/TypesBinders'
import Map from '../../components/Map/Map'

import style from './Home.module.scss'

const Home = () => {
  return (
    <>
      <MainBanner />
      <main className={style.main_section}>
        <Info />
        <Divider />
        <Price />
        <Divider />
        <Checkout />
        <TypeBetonanasos />
        <Divider />
        <Advice />
        <Divider />
        <Strengths />
        <Divider />
        <InfoAboutBeton />
        <Divider />
        <InfoBetonParametrs />
        <Divider />
        <ConcreteFiller />
        <Divider />
        <TypesBinders />
        <Divider />
        <Map />
      </main>
    </>
  )
}

export default Home
