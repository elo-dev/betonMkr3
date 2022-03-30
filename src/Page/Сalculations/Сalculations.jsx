import React, { useState } from 'react'
import { Button, Col, Divider, Input, Layout, Row, Typography } from 'antd'

import CheckoutForm from '../../components/CheckoutForm/CheckoutForm'

import schemeIcon1 from '../../assets/schems/schemIcon1.jpeg'
import schemeIcon2 from '../../assets/schems/schemIcon2.jpeg'
import schemeIcon3 from '../../assets/schems/schemIcon3.jpeg'
import schemeIcon4 from '../../assets/schems/schemIcon4.jpeg'
import schemeIcon5 from '../../assets/schems/schemIcon5.jpeg'

import Scheme1 from './Scheme/Scheme1'
import Scheme2 from './Scheme/Scheme2'
import Scheme3 from './Scheme/Scheme3'
import Scheme4 from './Scheme/Scheme4'
import Scheme5 from './Scheme/Scheme5'

import scheme6 from '../../assets/schems/scheme6.jpeg'

import style from './Calculations.module.scss'

const { Title } = Typography

const schemeIcons = [
  { id: 1, img: schemeIcon1 },
  { id: 2, img: schemeIcon2 },
  { id: 3, img: schemeIcon3 },
  { id: 4, img: schemeIcon4 },
  { id: 5, img: schemeIcon5 },
]

const Сalculations = () => {
  const [activeCheckbox, setActiveCheckbox] = useState(1)

  const [inputWidthA, setInputWidthA] = useState(0)
  const [inputLengthB, setInputLengthB] = useState(0)
  const [inputHeightC, setInputHeightC] = useState(0)
  const [volumeOfConcrete, setVolumeOfConcrete] = useState(0)

  const calculate = () => {
    const C = +inputHeightC / 100
    const total = +inputWidthA * inputLengthB * C
    setVolumeOfConcrete(total)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    calculate()
  }

  return (
    <Layout className={style.calculations}>
      <Title level={1}>РАСЧЕТ ФУНДАМЕНТА</Title>
      <CheckoutForm />
      <Row>
        <Title level={3}>
          РАСЧЕТ РАЗМЕРОВ, АРМАТУРЫ И КОЛИЧЕСТВА БЕТОНА МОНОЛИТНОГО ЛЕНТОЧНОГО
          ФУНДАМЕНТА
        </Title>
        <p>Тип фундамента:</p>
        {schemeIcons.map(({ id, img }) => (
          <div className={style.schemeIcons} key={id}>
            <label className={style.schemeIcons__icon}>
              <input
                type="radio"
                required
                checked={id === activeCheckbox}
                onChange={() => setActiveCheckbox(id)}
              />
              <img className={style.schemeIcons__img} src={img} alt={id} />
            </label>
          </div>
        ))}
        <Col span={24}>
          {activeCheckbox === 1 && <Scheme1 />}
          {activeCheckbox === 2 && <Scheme2 />}
          {activeCheckbox === 3 && <Scheme3 />}
          {activeCheckbox === 4 && <Scheme4 />}
          {activeCheckbox === 5 && <Scheme5 />}
        </Col>
        <Divider />
        <Row>
          <Title level={3}>
            КАЛЬКУЛЯТОР РАСЧЕТА МОНОЛИТНОГО ПЛИТНОГО ФУНДАМЕНТА
          </Title>
          <Col span={12}>
            <form onSubmit={handleSubmit}>
              <div className={style.input_wrapper}>
                <p>Ширина плиты А:</p>
                <Input
                  className={style.input}
                  type="number"
                  onChange={(e) => setInputWidthA(e.target.value)}
                  value={inputWidthA}
                />
                <span className={style.unitOfMeasure}>м</span>
              </div>
              <div className={style.input_wrapper}>
                <p>Длина плиты B:</p>
                <Input
                  className={style.input}
                  type="number"
                  onChange={(e) => setInputLengthB(e.target.value)}
                  value={inputLengthB}
                />
                <span className={style.unitOfMeasure}>м</span>
              </div>
              <div className={style.input_wrapper}>
                <p>Высота плиты С:</p>
                <Input
                  className={style.input}
                  type="number"
                  onChange={(e) => setInputHeightC(e.target.value)}
                  value={inputHeightC}
                />
                <span className={style.unitOfMeasure}>см</span>
              </div>
              <Button htmlType="submit">РАССЧИТАТЬ</Button>
            </form>
          </Col>
          <Col span={12}>
            <div className={style.total}>
              <p className={style.total__text}>
                Объем бетона: {volumeOfConcrete} м3
              </p>
            </div>
          </Col>
          <Col span={24}>
            <img className={style.scheme_img} src={scheme6} alt="Схема 6" />
          </Col>
        </Row>
      </Row>
    </Layout>
  )
}

export default Сalculations
