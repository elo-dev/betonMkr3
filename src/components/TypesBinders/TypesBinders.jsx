import React from 'react'
import { Carousel, Col, Layout, Row, Typography } from 'antd'

import cementImg from '../../assets/img/cement.png'
import silicatImg from '../../assets/img/silicat.png'

import style from './TypesBinders.module.scss'

const { Title } = Typography

const TypesBinders = () => {
  const settings = {
    dots: true,
    infinite: true,
    // autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Layout className={style.types_binders}>
      <Title>ВИДЫ ВЯЖУЩИХ ВЕЩЕСТВ</Title>
      <Carousel {...settings}>
        <div className={style.wrapper}>
          <div className={style.carousel_card}>
            <Title level={5}>Силикатные компоненты</Title>
            <p className={style.text}>
              Имеют в основе известковые вещества и характеризуют автоклавный
              способ затвердения. Сегодня такая методика используется крайне
              редко и на производстве не распространена.
            </p>
          </div>
          <div className={style.img_wrapper}>
            <img className={style.img} src={silicatImg} alt="Силикат" />
          </div>
        </div>
        <div className={style.wrapper}>
          <div className={style.carousel_card}>
            <Title level={5}>Цемент</Title>
            <p className={style.text}>
              Является одним из распространенных материалов, который входит в
              разной пропорциональности в состав бетона. Данный состав наша
              компания предлагает с доставкой по Щелково в любом объеме и в
              самые короткие сроки.
            </p>
          </div>
          <div className={style.img_wrapper}>
            <img className={style.img} src={cementImg} alt="Цемент" />
          </div>
        </div>
      </Carousel>
    </Layout>
  )
}

export default TypesBinders
