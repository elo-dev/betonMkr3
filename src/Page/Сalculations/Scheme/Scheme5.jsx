import React, { useState } from 'react'
import { Button, Col, Input, Row } from 'antd'

import scheme5 from '../../../assets/schems/schema5.jpeg'

import style from '../Calculations.module.scss'

const Scheme1 = () => {
  const [inputLengthA, setInputLengthA] = useState(0)
  const [inputLengthB, setInputLengthB] = useState(0)
  const [inputHeightC, setInputHeightC] = useState(0)
  const [inputThicknessD, setInputThicknessD] = useState(0)
  const [inputLengthE, setInputLengthE] = useState(0)
  const [inputLengthF, setInputLengthF] = useState(0)
  const [volumeOfConcrete, setVolumeOfConcrete] = useState(0)

  const calculate = () => {
    const C = +inputHeightC / 100
    const D = +inputThicknessD / 100
    const total =
      ((+inputLengthA + +inputLengthB) * 2 + +inputLengthE + +inputLengthF) *
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
          <img src={scheme5} alt="Схема 5" />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <form onSubmit={handleSubmit}>
            <div className={style.input_wrapper}>
              <p>Общая длинна ленты А:</p>
              <Input
                className={style.input}
                type="number"
                onChange={(e) => setInputLengthA(e.target.value)}
                value={inputLengthA}
              />
              <span className={style.unitOfMeasure}>м</span>
            </div>
            <div className={style.input_wrapper}>
              <p>Общая длинна ленты B:</p>
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
                onChange={(e) => setInputLengthE(e.target.value)}
                value={inputLengthE}
              />
              <span className={style.unitOfMeasure}>м</span>
            </div>
            <div className={style.input_wrapper}>
              <p>Длина ленты в середине F:</p>
              <Input
                className={style.input}
                type="number"
                onChange={(e) => setInputLengthF(e.target.value)}
                value={inputLengthF}
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
