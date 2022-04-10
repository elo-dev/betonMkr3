import React from 'react'
import { Carousel, Col, Divider, Row, Typography } from 'antd'
import {
  CreditCardOutlined,
  SplitCellsOutlined,
  WalletOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'

import betonImg from '../../assets/img/beton-min.jpeg'
import nasosyImg from '../../assets/img/nasosy.jpeg'
import rastvorImg from '../../assets/img/rastvor.jpeg'

import work1 from '../../assets/img/work1.jpg'
import work2 from '../../assets/img/work2.jpg'

import style from './Info.module.scss'

const { Title, Text } = Typography

const Info = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
      <Row className={style.info} justify="space-between" gutter={16}>
        <Col sm={24} md={24} lg={8} xl={8} className={style.info__content}>
          <Title level={1} className={style.title}>
            БЕТОН В МОСКВЕ И МО
          </Title>
          <p className={style.text}>
            Завод-изготовитель бетона и растворов компания ЕвроПромБетон
            расположен в Щелково и предлагает доставку любой марки смеси до
            ближайших населенных пунктов в радиусе 50 км (Щелковский,
            Пушкинский, Ногинский, Балашихинский, Сергиево-Посадский районы). Мы
            осуществляем быструю и непрерывную поставку материала в
            автобетоносмесителях разного объема, по самому Щелково и ближайшим
            населенным пунктам. Клиент может лично присутствовать при
            изготовлении смеси и сопровождать груз до стройплощадки.
          </p>
          <Link to="/our_works">
            <button className={style.moreWorksBtn}>Смотреть наши работы</button>
          </Link>
        </Col>
        <Col sm={24} md={24} lg={16} xl={16}>
          <Carousel {...settings}>
            <div>
              <img className={style.infoImg} src={work1} alt="logo" />
            </div>
            <div>
              <img className={style.infoImg} src={work2} alt="logo" />
            </div>
          </Carousel>
        </Col>
      </Row>
      <Divider />
      <Row className={style.subInfo} gutter={16} justify="center">
        <Col span={24} className={style.subTitle}>
          <Title level={3}>
            У НАС ВЫ МОЖЕТЕ ЗАКАЗАТЬ БЕТОН ВСЕХ МАРОК С ДОСТАВКОЙ
          </Title>
        </Col>
        <Col sm={24} md={12} lg={8} xl={8} className={style.imgInfoBeton}>
          <img src={betonImg} alt="Бетон" />
        </Col>
        <Col sm={24} md={12} lg={8} xl={8} className={style.imgInfoRastvor}>
          <img src={rastvorImg} alt="Растворы" />
        </Col>
        <Col sm={24} md={24} lg={8} xl={8} className={style.imgInfoNasos}>
          <img src={nasosyImg} alt="Насосы" />
        </Col>
      </Row>
      <Row className={style.payment}>
        <Col span={24}>
          <Title className={style.payment__title} level={3}>
            ПРИНИМАЕМ ЛЮБЫЕ ВИДЫ ОПЛАТЫ
          </Title>
        </Col>
        <Row className={style.payment__wrapper} justify="center">
          <Col sm={24} md={24} lg={8} xl={12} className={style.payment__item}>
            <SplitCellsOutlined className={style.item__icon} />
            <Text className={style.item__text}>
              Банковской картой на объекте через терминал (Visa, MasterCard,
              МИР)
            </Text>
          </Col>
          <Col sm={24} md={12} lg={8} xl={6} className={style.payment__item}>
            <WalletOutlined className={style.item__icon} />
            <Text className={style.item__text}>Наличный расчет</Text>
          </Col>
          <Col sm={24} md={12} lg={8} xl={6} className={style.payment__item}>
            <CreditCardOutlined className={style.item__icon} />
            <Text className={style.item__text}>Безналичный расчет</Text>
          </Col>
        </Row>
      </Row>
    </>
  )
}

export default Info
