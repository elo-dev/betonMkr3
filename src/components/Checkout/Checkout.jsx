import React from 'react'
import { Row, Col } from 'antd'
import { Layout, Typography } from 'antd'

import style from './Checkout.module.scss'
import CheckoutForm from '../CheckoutForm/CheckoutForm'

const { Title } = Typography

const Checkout = () => {
  return (
    <Layout className={style.checkout}>
      <Title>ОФОРМИТЬ ЗАЯВКУ НА БЕТОН</Title>
      <Row>
        <Col sm={24} md={24} lg={12} xl={12}>
          <div className={style.form}>
            <CheckoutForm />
          </div>
        </Col>
      </Row>
    </Layout>
  )
}

export default Checkout
