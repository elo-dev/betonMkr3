import React, { useEffect } from 'react'
import { Carousel, Col, Layout, Row, Typography } from 'antd'

import CheckoutForm from '../../components/CheckoutForm/CheckoutForm'

import work3 from '../../assets/img/work3.jpg'
import work5 from '../../assets/img/work5.jpeg'

import style from './OurWorks.module.scss'

const { Title } = Typography

const OurWorks = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout className={style.our_works}>
      <Title>НАШИ РАБОТЫ</Title>
      <CheckoutForm />
      <Row>
        <Col span={24}>
          <Carousel {...settings}>
            <div>
              <img className={style.our_works__img} src={work3} alt="logo" />
            </div>
            <div>
              <img className={style.our_works__img} src={work5} alt="logo" />
            </div>
          </Carousel>
        </Col>
      </Row>
    </Layout>
  )
}

export default OurWorks
