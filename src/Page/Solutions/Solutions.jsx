import React, { useEffect } from 'react'
import { Col, Layout, Row, Typography } from 'antd'

import CheckoutForm from '../../components/CheckoutForm/CheckoutForm'

import rastvorImg from '../../assets/img/rastvor2.jpeg'

import style from './Solutions.module.scss'

const { Title } = Typography

const Solutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout className={style.solutions}>
      <Title>РАСТВОРЫ</Title>
      <Title className={style.table_title} level={3}>
        РАСТВОРЫ
      </Title>
      <table className={style.solutions__table}>
        <thead>
          <tr>
            <th>Марка</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Раствор М 100</td>
            <td>4 050 руб. /1м³</td>
          </tr>
          <tr>
            <td>Раствор М 200</td>
            <td>4 150 руб. /1м³</td>
          </tr>
          <tr>
            <td>Раствор M 250</td>
            <td>4 350 руб. /1м³</td>
          </tr>
        </tbody>
      </table>
      <CheckoutForm />
      <Row justify="center">
        <Col span={24}>
          <Title className={style.info_title} level={5}>
            КАЧЕСТВО ПО ДОСТУПНОЙ ЦЕНЕ
          </Title>
          <p className={style.info_text}>
            Все растворы от компании ЕвроПромБетон экономят время и трудозатраты
            на строительные работы, окупаясь по окончании работ. Цементный
            раствор М200 выполнен из песка, воды и цемента, имеет в составе
            пластификаторы, которые продлят срок службы вещества. Такой продукт
            необходим для следующих работ:
          </p>
          <ul className={style.info_list}>
            <li>Затирка и наполнение швов между панелями и блоками</li>
            <li>Гидроизоляционные работы</li>
            <li>Стяжка</li>
            <li>Обустройство сливных систем и канализации</li>
            <li>Кладка кирпича, блоков и штукатурные работы</li>
          </ul>
          <p className={style.info_text}>
            Марка М100 изготавливается из просеянного песка мелкой фракции, воды
            и цемента. Такой раствор необходим при отделочных работах любого
            объекта. Область применения:
          </p>
          <ul className={style.info_list}>
            <li>базовая основа под облицовку;</li>
            <li>кровельные и штукатурные работы;</li>
            <li>укладка плитки, гипсовых плит и мозаики;</li>
            <li>затирка швов между плит.</li>
          </ul>
        </Col>
      </Row>
      <Row justify="center" align="middle" gutter={16}>
        <Col sm={24} md={16} lg={16} xl={16}>
          <p className={style.info_text}>
            Оба вида цементных растворов (М100 и М200) от завода изготовителя
            компании ЕвроПромБетон сертифицированы, производятся в строгом
            соблюдении технологического процесса и пропорциональности
            составляющих. Смеси готовятся на производстве с последующей
            доставкой на объект.
          </p>
        </Col>
        <Col span={8}>
          <img className={style.info_img} src={rastvorImg} alt="Раствор" />
        </Col>
      </Row>
    </Layout>
  )
}

export default Solutions
