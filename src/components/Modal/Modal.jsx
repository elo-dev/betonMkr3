import React, { useRef, useState } from 'react'
import { Modal, Col, Row, message } from 'antd'

import emailjs from '@emailjs/browser'

import style from './Modal.module.scss'

const ModalWindow = ({ isModalVisible, setIsModalVisible }) => {
  const form = useRef()

  const [name, setName] = useState('')
  const [phoneNum, setPhoneNum] = useState('')

  const sendEmail = (e) => {
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
  }

  const handleSubmit = () => {
    if (phoneNum.length === 11 && name) {
      sendEmail()
      setIsModalVisible(false)
      message.success({
        content: 'Заявка оформлена',
        className: style.message,
      })
    } else {
      message.error({
        content: 'Ошибка при заполнении полей',
        className: style.message,
      })
    }
  }

  const handleCancel = () => {
    setName('')
    setPhoneNum('')
    setIsModalVisible(false)
  }

  return (
    <>
      <Modal
        title="Обратный звонок"
        visible={isModalVisible}
        onOk={handleSubmit}
        okText="Отправить"
        onCancel={handleCancel}
        cancelText="Закрыть"
      >
        <form ref={form}>
          <Row gutter={16}>
            <Col span={24}>
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
          </Row>
        </form>
      </Modal>
    </>
  )
}

export default ModalWindow
