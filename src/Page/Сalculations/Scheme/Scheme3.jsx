import React, { useState } from 'react'
import { Button, Col, Input, Row } from 'antd'

import scheme3 from '../../../assets/schems/schema3.jpeg'

import style from '../Calculations.module.scss'

const Scheme1 = () => {
  const [inputWidthA, setInputWidthA] = useState(0)
  const [inputLengthB, setInputLengthB] = useState(0)
  const [inputHeightC, setInputHeightC] = useState(0)
  const [inputThicknessD, setInputThicknessD] = useState(0)
  const [inputLengthInMiddleE, setLengthInMiddleE] = useState(0)
  const [volumeOfConcrete, setVolumeOfConcrete] = useState(0)

  const calculate = () => {
    const C = +inputHeightC / 100
    const D = +inputThicknessD / 100
    const total =
      ((+inputWidthA + +inputLengthB) * 2 +
        +inputWidthA +
        +inputLengthInMiddleE) *
      C *
      D
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
          <img src={scheme3} alt="Схема 3" />
        </Col>
      </Row>
      <Row>
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
              <p>Высота ленты C:</p>
              <Input
                className={style.input}
                type="number"
                onChange={(e) => setInputHeightC(e.target.value)}
                value={inputHeightC}
              />
              <span className={style.unitOfMeasure}>см</span>
            </div>
            <div className={style.input_wrapper}>
              <p>Толщина ленты D:</p>
              <Input
                className={style.input}
                type="number"
                onChange={(e) => setInputThicknessD(e.target.value)}
                value={inputThicknessD}
              />
              <span className={style.unitOfMeasure}>см</span>
            </div>
            <div className={style.input_wrapper}>
              <p>Длина ленты в середине E:</p>
              <Input
                className={style.input}
                type="number"
                onChange={(e) => setLengthInMiddleE(e.target.value)}
                value={inputLengthInMiddleE}
              />
              <span className={style.unitOfMeasure}>м</span>
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
      </Row>
    </div>
  )
}

export default Scheme1
