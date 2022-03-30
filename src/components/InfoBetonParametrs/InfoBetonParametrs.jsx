import React from 'react'
import { Col, Layout, Row, Typography } from 'antd'

import imgParametr1 from '../../assets/img/parametr1.jpeg'
import imgParametr2 from '../../assets/img/parametr2.jpeg'
import imgParametr3 from '../../assets/img/parametr3.jpeg'
import imgParametr4 from '../../assets/img/parametr4.jpeg'
import imgParametr5 from '../../assets/img/parametr5.jpeg'
import imgParametr6 from '../../assets/img/parametr6.jpeg'

import style from './InfoBetonParametrs.module.scss'

const { Title } = Typography

const InfoBetonParametrs = () => {
  return (
    <Layout className={style.infoBetonParametrs}>
      <Title className={style.title}>
        МЫ ПРОИЗВЕДЕМ БЕТОН, УЧИТЫВАЯ ВСЕ ПАРАМЕТРЫ В СООТВЕТСТВИИ С ВАШИМ
        ПРОЕКТОМ, И ДОСТАВИМ НА ВАШ СТРОИТЕЛЬНЫЙ ОБЪЕКТ В ЩЕЛКОВО ДЛЯ:
      </Title>
      <Row gutter={16} justify="center">
        <Col sm={24} md={24} lg={12} xl={12}>
          <div className={style.wrapper}>
            <img className={style.img} src={imgParametr1} alt="Параметр 1" />
          </div>
        </Col>
        <Col sm={24} md={12} lg={6} xl={6}>
          <div className={style.wrapper}>
            <img className={style.img} src={imgParametr2} alt="Параметр 2" />
          </div>
        </Col>
        <Col sm={24} md={12} lg={6} xl={6}>
          <div className={style.wrapper}>
            <img className={style.img} src={imgParametr3} alt="Параметр 3" />
          </div>
        </Col>
      </Row>
      <Row gutter={16} justify="center">
        <Col sm={24} md={12} lg={6} xl={6}>
          <img className={style.img} src={imgParametr4} alt="Параметр 4" />
        </Col>
        <Col sm={24} md={12} lg={6} xl={6}>
          <img className={style.img} src={imgParametr5} alt="Параметр 5" />
        </Col>
        <Col sm={24} md={24} lg={12} xl={12}>
          <img className={style.img} src={imgParametr6} alt="Параметр 6" />
        </Col>
      </Row>
    </Layout>
  )
}

export default InfoBetonParametrs
