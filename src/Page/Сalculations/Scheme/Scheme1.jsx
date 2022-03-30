import React, { useEffect, useState } from 'react'
import { Button, Col, Input, Row } from 'antd'

import scheme1 from '../../../assets/schems/schema1.jpeg'

import style from '../Calculations.module.scss'

const Scheme1 = () => {
  const [inputWidthA, setInputWidthA] = useState(0)
  const [inputLengthB, setInputLengthB] = useState(0)
  const [inputWidthC, setInputWidthC] = useState(0)
  const [inputWidthD, setInputWidthD] = useState(0)
  const [volumeOfConcrete, setVolumeOfConcrete] = useState(0)

  const calculate = () => {
    const C = +inputWidthC / 100
    const D = +inputWidthD / 100
    const total = (+inputWidthA + +inputLengthB) * 2 * C * D
    setVolumeOfConcrete(total)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    calculate()
  }

  return (
    <div>
      <Row>
        <Col span={12}>
          <img src={scheme1} alt="Схема 1" />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <form onSubmit={handleSubmit}>
            <div className={style.input_wrapper}>
              <p>Ширина ленты А:</p>
              <Input
                className={style.input}
                type="number"
                onChange={(e) => setInputWidthA(e.target.value)}
                value={inputWidthA}
              />
              <span className={style.unitOfMeasure}>м</span>
            </div>
            <div className={style.input_wrapper}>
              <p>Длина ленты B:</p>
              <Input
                className={style.input}
                type="number"
                onChange={(e) => setInputLengthB(e.target.value)}
                value={inputLengthB}
              />
              <span className={style.unitOfMeasure}>м</span>
            </div>
            <div className={style.input_wrapper}>
              <p>Ширина ленты C:</p>
              <Input
                className={style.input}
                type="number"
                onChange={(e) => setInputWidthC(e.target.value)}
                value={inputWidthC}
              />
              <span className={style.unitOfMeasure}>см</span>
            </div>
            <div className={style.input_wrapper}>
              <p>Ширина ленты D:</p>
              <Input
                className={style.input}
                type="number"
                onChange={(e) => setInputWidthD(e.target.value)}
                value={inputWidthD}
              />
              <span className={style.unitOfMeasure}>см</span>
            </div>
            <Button htmlType="submit">РАССЧИТАТЬ</Button>
          </form>
        </Col>
        <Col span={12}>
          <div className={style.total}>
            <p className={style.total__text}>Объем бетона: {volumeOfConcrete} м3</p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Scheme1
