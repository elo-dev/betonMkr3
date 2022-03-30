import React from 'react'
import { Col, Layout, Row, Typography } from 'antd'

import stacionarImg from '../../assets/img/stac.png'
import lineiniImg from '../../assets/img/lineini.png'
import strelImg from '../../assets/img/strel.png'

import style from './TypeBetonanasos.module.scss'

const { Title } = Typography

const TypeBetonanasos = () => {
  return (
    <Layout className={style.typeBetonanasos}>
      <Title>ВИДЫ БЕТОНОНАСОСОВ</Title>
      <Row gutter={50} justify="center">
        <Col sm={24} md={12} lg={8} xl={8}>
          <div className={style.typeBetonanasos__card}>
            {/* <img src={stacionarImg} alt="Стационарный" /> */}
            <Title level={4}>СТАЦИОНАРНЫЙ</Title>
            <p>
              Pulzmaster BSA 1409 D -{' '}
              <span className={style.price}>7 000 руб./смена</span>
            </p>
          </div>
        </Col>
        <Col sm={24} md={12} lg={8} xl={8}>
          <div className={style.typeBetonanasos__card}>
            {/* <img src={lineiniImg} alt="Линейный" /> */}
            <Title level={4}>ЛИНЕЙНЫЙ</Title>
            <p>
              Подача до 150 м -{' '}
              <span className={style.price}>от 12 000 руб./смена</span>
            </p>
            <p>
              Трасса - <span className={style.price}>100 рублей за метр</span>
            </p>
          </div>
        </Col>
        <Col sm={24} md={12} lg={8} xl={8}>
          <div className={style.typeBetonanasos__card}>
            {/* <img src={strelImg} alt="Стрелочный" /> */}
            <Title level={4}>СТРЕЛОВОЙ</Title>
            <p>
              Подача от 18 - 34 м -{' '}
              <span className={style.price}>от 16 000 руб./смена</span>
            </p>
            <p>
              Подача от 36 - 56 м -{' '}
              <span className={style.price}>от 21 000 руб./смена</span>
            </p>
            <p>
              Подача от 56 м - <span className={style.price}>Договорная</span>
            </p>
          </div>
        </Col>
      </Row>
    </Layout>
  )
}

export default TypeBetonanasos
