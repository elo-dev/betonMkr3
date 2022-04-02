import React, { useEffect } from 'react'
import { Col, Layout, Row, Typography } from 'antd'
import { Map, Placemark } from 'react-yandex-maps'

import CheckoutForm from '../../components/CheckoutForm/CheckoutForm'

import logo from '../../assets/icons/icon1.png'

import style from './Contacts.module.scss'

const { Title } = Typography

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout className={style.contacts}>
      <Title level={1}>КОНТАКТЫ</Title>
      <CheckoutForm />
      <Row>
        <Col span={24}>
          <p className={style.subtitle}>РАБОТАЕМ КРУГЛОСУТОЧНО!</p>
          <p className={style.phone_num}>8 (800) 333-64-20</p>
          <p className={style.phone_num}>8 (499) 343-64-20</p>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <p className={style.subtitle}>АДРЕС</p>
          <p className={style.location}>Верхние Поля 65 с3</p>
          <Map
            width="100%"
            height="400px"
            defaultState={{ center: [55.659028, 37.805401], zoom: 15 }}
          >
            <Placemark
              geometry={[55.659028, 37.805401]}
              options={{
                iconLayout: 'default#image',
                iconImageHref: logo,
                iconImageSize: [40, 40],
              }}
            />
          </Map>
        </Col>
      </Row>
    </Layout>
  )
}

export default Contacts
