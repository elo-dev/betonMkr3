import React from 'react'
import { Col, Layout, Row, Typography } from 'antd'

import betonImg from '../../assets/img/beton-vibor.jpeg'

import style from './InfoAboutBeton.module.scss'
import {
  BgColorsOutlined,
  BoxPlotFilled,
  DragOutlined,
  RiseOutlined,
} from '@ant-design/icons'

const { Title, Text } = Typography

const InfoAboutBeton = () => {
  return (
    <Layout className={style.infoAboutBeton}>
      <Title>КАКОЙ ПРОИЗВОДИТСЯ БЕТОН</Title>
      <Text className={style.classification_beton}>
        Существующие марки бетонных растворов классифицируются по следующим
        параметрам:
      </Text>
      <Row>
        <Col sm={24} md={12} lg={12} xl={12}>
          <p className={style.header_text}>
            Например: Бетон М 300 (БСГ В22,5 П3F200W6) где:
          </p>
          <div className={style.wrapper}>
            <BoxPlotFilled className={style.icon} />
            <p className={style.text}>
              B - класс бетона по прочности на сжатие
            </p>
          </div>
          <div className={style.wrapper}>
            <DragOutlined className={style.icon} />
            <p className={style.text}>
              П - подвижность (густота бетона в простонародье)
            </p>
          </div>
          <div className={style.wrapper}>
            <RiseOutlined className={style.icon} />
            <p className={style.text}>
              F - морозоустойчивость (морозостойкость)
            </p>
          </div>
          <div className={style.wrapper}>
            <BgColorsOutlined className={style.icon} />
            <p className={style.text}>W - водонепроницаемость.</p>
          </div>
        </Col>
        <Col className={style.infoAboutBeton__img} md={12} lg={12} xl={12}>
          <img src={betonImg} alt="Бетон" />
        </Col>
      </Row>
    </Layout>
  )
}

export default InfoAboutBeton
