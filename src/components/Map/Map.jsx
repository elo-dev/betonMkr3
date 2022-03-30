import React from 'react'
import { Col, Layout, Row, Typography } from 'antd'

import style from './Map.module.scss'

import mapImg from '../../assets/img/map.jpeg'

const { Title } = Typography

const Map = () => {
  return (
    <Layout className={style.map}>
      <Title>КАРТА ДОСТАВКИ</Title>
      <Row>
        <Col span={24}>
          <img className={style.map__img} src={mapImg} alt="Карта доставки" />
          <div className={style.delivery_point}>
            <p className={style.delivery_point__name}>Москва</p>
            <p className={style.delivery_point__name}>Ленинский район</p>
            <p className={style.delivery_point__name}>Наро-Фоминский район</p>
            <p className={style.delivery_point__name}>Подольский район</p>
            <p className={style.delivery_point__name}>Чеховский районсе</p>
            <p className={style.delivery_point__name}>Серпуховский район</p>
            <p className={style.delivery_point__name}>Район Домодедово</p>
          </div>
        </Col>
      </Row>
    </Layout>
  )
}

export default Map
