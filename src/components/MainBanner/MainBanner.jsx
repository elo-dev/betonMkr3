import React from 'react'
import { Carousel } from 'antd'

import style from './MainBanner.module.scss'

import bannerImg1 from '../../assets/img/bannerImg1.jpg'
import bannerImg2 from '../../assets/img/bannerImg2.jpg'

const MainBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className={style.main_banner}>
      <Carousel {...settings}>
        <div>
          <img className={style.bannerImg} src={bannerImg1} alt="logo" />
        </div>
        <div>
          <img className={style.bannerImg} src={bannerImg2} alt="logo" />
        </div>
      </Carousel>
    </div>
  )
}

export default MainBanner
