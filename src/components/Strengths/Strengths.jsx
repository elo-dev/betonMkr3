import React from 'react'
import { Col, Layout, Row, Typography } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'

import style from './Strengths.module.scss'

const { Title, Text } = Typography

const strengths = [
  {
    id: 1,
    text: 'Мы самостоятельно производим любую марку бетона, что гарантирует качество и адекватную стоимость. (производительность нашего РБУ 71 м3 в час что позволяет осуществлять непрерывную подачу бетона).',
  },
  {
    id: 2,
    text: 'Бесплатно предоставляем в аренду глубинный вибратор бетона.',
  },
  {
    id: 3,
    text: 'Мы предоставляем официальные документы которые гарантируют прозрачность сделки.',
  },
  {
    id: 4,
    text: 'Бесплатный выезд специалиста который поможет вам решить любой вопрос касающийся заливки вашей конструкции.',
  },
  {
    id: 5,
    text: 'Мы принимаем к оплате "пластиковые карты" и выдаем кассовый чек.',
  },
  {
    id: 6,
    text: 'Если у вас нет форм для отбора образцов бетона 10х10х10, то мы готовы вам их предоставить в аренду или на выкуп.',
  },
  {
    id: 7,
    text: 'Наш автопарк состоит из 13 автобетоносмесителей объемами от 7 до 10 м3 и 2 автобетононасосов.',
  },
  {
    id: 8,
    text: 'Собственная аттестованная лаборатория. Если требуется подача бетона на высоту или заливка его в рвы и котловины, то для данной цели мы предлагаем аренду бетононасоса на любой период времени в Щелково (длина стрелы от 15 до 68 метров).',
  },
  {
    id: 9,
    text: 'Каждая машина в нашем парке имеет датчик GPS, и мы отслеживаем каждый километр пути до объекта.',
  },
  {
    id: 10,
    text: 'В нашем автопарке имеется автобетоносмесители с длиной подачи бетона до 6 метров.',
  },
  {
    id: 11,
    text: 'Наша компания непрерывно отбирает пробы бетона, инертных материалов, и проводит их исследование, что позволяет нам гарантировать качество бетона на высшем уровне в соответствии всем требованиям и нормам.',
  },
  { id: 12, text: 'Мы работаем 24 часа в сутки 7 дней в неделю.' },
  { id: 13, text: 'Мы используем только качественные инертные материалы.' },
  {
    id: 14,
    text: 'Заявки принимаются в любое время, включая выходные и праздничные дни - по телефону, на сайте компании и при личном обращении.',
  },
  {
    id: 15,
    text: 'Мы не срываем сроки и гарантируем быструю доставку и экстренный запуск производства, при срочности заказа.',
  },
]

const Strengths = () => {
  return (
    <Layout className={style.strengths}>
      <Title level={1} className={style.title}>
        НАША КОМПАНИЯ "ЕВРОПРОМБЕТОН" ПРЕДЛАГАЕТ СЕРВИС, КОТОРЫЙ ОТЛИЧАЕТСЯ ОТ
        ИНЫХ ОРГАНИЗАЦИЙ:
      </Title>
      <Row gutter={16}>
        {strengths.map(({ id, text }) => (
          <Col sm={24} md={24} lg={12} xl={12} key={id}>
            <div className={style.info_block}>
              <ArrowRightOutlined className={style.info_block__arrow} />{' '}
              <Text className={style.info_block__text}>{text}</Text>
            </div>
          </Col>
        ))}
      </Row>
    </Layout>
  )
}

export default Strengths