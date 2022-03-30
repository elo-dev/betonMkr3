import React from 'react'
import { Col, Layout, Row, Typography } from 'antd'

import style from './Price.module.scss'

import work3 from '../../assets/img/work3.jpg'
import work5 from '../../assets/img/work5.jpeg'

const { Title } = Typography

const Price = () => {
  return (
    <Layout className={style.price}>
      <Title level={1}>ЦЕНЫ</Title>
      <Row gutter={30}>
        <Col sm={24} md={24} lg={12} xl={12} className={style.price__col}>
          <div className={style.card}>
            <div className={style.card__header_img}>
              <img className={style.card__img} src={work3} alt="img" />
            </div>
            <Title className={style.card__title} level={3}>
              Бетон
            </Title>
            <table className={style.card__table}>
              <thead>
                <tr>
                  <th>Марка</th>
                  <th>Цена</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Бетон М 100 (БСТ В7 5П4 F50)</td>
                  <td>4 250 руб. /1м³</td>
                </tr>
                <tr>
                  <td>Бетон М 100 (БСТ В7 5П4 F50)</td>
                  <td>4 250 руб. /1м³</td>
                </tr>
                <tr>
                  <td>Бетон М 100 (БСТ В7 5П4 F50)</td>
                  <td>4 250 руб. /1м³</td>
                </tr>
                <tr>
                  <td>Бетон М 100 (БСТ В7 5П4 F50)</td>
                  <td>4 250 руб. /1м³</td>
                </tr>
                <tr>
                  <td>Бетон М 100 (БСТ В7 5П4 F50)</td>
                  <td>4 250 руб. /1м³</td>
                </tr>
              </tbody>
            </table>
            <Title className={style.card__title} level={3}>
              На граните
            </Title>
            <table className={style.card__table}>
              <thead>
                <tr>
                  <th>Марка</th>
                  <th>Цена</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Бетон М 100 (БСТ В7 5П4 F50)</td>
                  <td>4 250 руб. /1м³</td>
                </tr>
                <tr>
                  <td>Бетон М 100 (БСТ В7 5П4 F50)</td>
                  <td>4 250 руб. /1м³</td>
                </tr>
                <tr>
                  <td>Бетон М 100 (БСТ В7 5П4 F50)</td>
                  <td>4 250 руб. /1м³</td>
                </tr>
                <tr>
                  <td>Бетон М 100 (БСТ В7 5П4 F50)</td>
                  <td>4 250 руб. /1м³</td>
                </tr>
                <tr>
                  <td>Бетон М 100 (БСТ В7 5П4 F50)</td>
                  <td>4 250 руб. /1м³</td>
                </tr>
              </tbody>
            </table>
            <Title className={style.card__title} level={3}>
              Растворы
            </Title>
            <table className={style.card__table}>
              <thead>
                <tr>
                  <th>Марка</th>
                  <th>Цена</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Бетон М 100 (БСТ В7 5П4 F50)</td>
                  <td>4 250 руб. /1м³</td>
                </tr>
                <tr>
                  <td>Бетон М 100 (БСТ В7 5П4 F50)</td>
                  <td>4 250 руб. /1м³</td>
                </tr>
                <tr>
                  <td>Бетон М 100 (БСТ В7 5П4 F50)</td>
                  <td>4 250 руб. /1м³</td>
                </tr>
                <tr>
                  <td>Бетон М 100 (БСТ В7 5П4 F50)</td>
                  <td>4 250 руб. /1м³</td>
                </tr>
                <tr>
                  <td>Бетон М 100 (БСТ В7 5П4 F50)</td>
                  <td>4 250 руб. /1м³</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
        <Col sm={24} md={24} lg={12} xl={12} className={style.price__col}>
          <div className={style.card}>
            <div className={style.card__header_img}>
              <img className={style.card__img} src={work5} alt="img" />
            </div>
            <Title className={style.card__title} level={3}>
              Услуги
            </Title>
            <table className={style.card__table}>
              <thead>
                <tr>
                  <th>Название услуги</th>
                  <th>Цена</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Разнорабочие</td>
                  <td>650 руб</td>
                </tr>
                <tr>
                  <td>Доставка</td>
                  <td>От 500 руб</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </Layout>
  )
}

export default Price
