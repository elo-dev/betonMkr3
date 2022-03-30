import React from 'react'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'

import style from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Row gutter={16} className={style.row} justify="center">
        <Col sm={12} md={12} lg={5} xl={5} className={style.footer__contacts}>
          <p>
            <a
              className={style.link}
              href="mailto:mkrbeton@mail.ru?subject=Заявка на бетон"
            >
              mkrbeton@mail.ru
            </a>
          </p>
          <p>
            <a className={style.phone_num} href="tel:+78003336420">
              8 (800) 333-64-20
            </a>
          </p>
          <p>
            <a className={style.phone_num} href="tel:+74993436420">
              8 (499) 343-64-20
            </a>
          </p>
          <p>Обратный звонок</p>
        </Col>
        <Col sm={8} md={8} lg={5} xl={5}>
          <p>
            <Link className={style.link} to="/calculations">
              РАСЧЕТ ФУНДАМЕНТА
            </Link>
          </p>
          <p>
            <Link className={style.link} to="/our_works">
              НАШИ РАБОТЫ
            </Link>
          </p>
          <p>
            <Link className={style.link} to="/delivery">
              ДОСТАВКА И ОПЛАТА
            </Link>
          </p>
          <p>
            <Link className={style.link} to="/contacts">
              КОНТАКТЫ
            </Link>
          </p>
        </Col>
        <Col sm={8} md={8} lg={4} xl={4}>
          <p>ПРОДУКЦИЯ</p>
          <p>
            <Link className={style.link} to="/beton">
              Бетон
            </Link>
          </p>
          <p>
            <Link className={style.link} to="/solutions">
              Раствор
            </Link>
          </p>
        </Col>
      </Row>
    </footer>
  )
}

export default Footer
