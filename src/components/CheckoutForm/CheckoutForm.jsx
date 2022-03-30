import React, { useRef, useState } from 'react'
import { Col, Row, message } from 'antd'
import emailjs from '@emailjs/browser'

import style from './CheckoutForm.module.scss'

const CheckoutForm = () => {
  const form = useRef()

  const [name, setName] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [amount, setAmount] = useState('')
  const [goodsName, setGoodsName] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    if (phoneNum.length === 11 && name) {
      emailjs
        .sendForm(
          'service_3bm0twj',
          'template_txx9eqj',
          form.current,
          'UD2_N000XHFGNCAfr'
        )
        .then(
          (result) => {
            message.success({
              content: 'Заявка оформлена',
              className: style.message,
            })
          },
          (error) => {
            message.error({ content: error.text, className: style.message })
          }
        )
    } else {
      message.error({
        content: 'Ошибка при заполнении полей',
        className: style.message,
      })
    }
  }

  return (
    <Row>
      <Col span={24}>
        <div className={style.checkout}>
          <form ref={form} onSubmit={sendEmail}>
            <Row gutter={16}>
              <Col span={12}>
                <input
                  placeholder="Имя"
                  className={style.input}
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <input
                  placeholder="Телефон"
                  className={style.input}
                  type="tel"
                  name="phone"
                  onChange={(e) => setPhoneNum(e.target.value)}
                  value={phoneNum}
                />
              </Col>
              <Col span={12}>
                <input
                  placeholder="Колличество товара"
                  className={style.input}
                  type="number"
                  name="amount"
                  onChange={(e) => setAmount(e.target.value)}
                  value={amount}
                />
                <select
                  className={style.input}
                  name="goodsName"
                  onChange={(e) => setGoodsName(e.target.value)}
                  value={goodsName}
                >
                  <option value="1">Бетон 100</option>
                </select>
              </Col>
            </Row>
            <p>
              Нажав на кнопку “Отправить”, Вы даете согласие на обработку
              персональных данных.
            </p>
            <button className={style.checkout__btn} type="submit">
              Отправить
            </button>
          </form>
        </div>
      </Col>
    </Row>
  )
}

export default CheckoutForm
