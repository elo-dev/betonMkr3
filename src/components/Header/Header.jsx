import React, { useEffect, useRef, useState } from 'react'
import { Col, Menu, Row } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import ModalWindow from '../Modal/Modal'

import style from './Header.module.scss'

const { SubMenu } = Menu

const Header = () => {
  const [menuItem, setMenuItem] = useState({ current: 'mail' })
  const [isMobile, setIsMobile] = useState()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const ref = useRef()

  const observer = useRef(
    new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect
      setIsMobile(width)
    })
  )

  useEffect(() => {
    observer.current.observe(ref.current)
  }, [ref, observer])

  const handleClick = (e) => {
    setMenuItem({ current: e.key })
  }

  const showModal = () => {
    setIsModalVisible(true)
  }

  return (
    <>
      <header className={style.header} ref={ref}>
        {isMobile >= 768 ? (
          <Row align="middle">
            <Col span={16}>
              <ul className={style.menu}>
                <Link className={style.link} to="/">
                  <li className={style.menu__item}>Главная</li>
                </Link>
                <Link className={style.link} to="/beton">
                  <li className={style.menu__item}>Бетон</li>
                </Link>
                <Link className={style.link} to="/solutions">
                  <li className={style.menu__item}>Раствор</li>
                </Link>
                <Link className={style.link} to="/calculations">
                  <li className={style.menu__item}>Фундамент</li>
                </Link>
                <Link className={style.link} to="/delivery">
                  <li className={style.menu__item}>Доставка и оплата</li>
                </Link>
                <Link className={style.link} to="/contacts">
                  <li className={style.menu__item}>Контакты</li>
                </Link>
              </ul>
            </Col>
            <Col span={8}>
              <div>
                <a className={style.info__phoneNum} href="tel:+78003336420">
                  8 (800) 333-64-20
                </a>
                <a className={style.info__phoneNum} href="tel:+74993436420">
                  8 (499) 343-64-20
                </a>
              </div>
              <div>
                <button className={style.info__callback} onClick={showModal}>
                  Обратный звонок
                </button>
              </div>
            </Col>
          </Row>
        ) : (
          <Row align="middle" gutter={20}>
            <Col sm={4}>
              <Menu
                mode="horizontal"
                selectedKeys={[menuItem]}
                onClick={handleClick}
                className={style.mobile_menu}
              >
                <SubMenu
                  key="SubMenu"
                  icon={<MenuOutlined className={style.menu_icon} />}
                >
                  <Menu.Item key="setting:1">
                    <Link className={style.link} to="/">
                      Главная
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="setting:1">
                    <Link className={style.link} to="/beton">
                      Бетон
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="setting:2">
                    <Link className={style.link} to="/solutions">
                      Раствор
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="setting:3">
                    <Link className={style.link} to="/calculations">
                      Фундамент
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="setting:4">
                    <Link className={style.link} to="/delivery">
                      Доставка и оплата
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="setting:5">
                    <Link className={style.link} to="/contacts">
                      Контакты
                    </Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Col>
            <Col sm={20}>
              <div>
                <a className={style.info__phoneNum} href="tel:+78003336420">
                  8 (800) 333-64-20
                </a>
                <a className={style.info__phoneNum} href="tel:+74993436420">
                  8 (499) 343-64-20
                </a>
              </div>
              <div>
                <button className={style.info__callback} onClick={showModal}>
                  Обратный звонок
                </button>
              </div>
            </Col>
          </Row>
        )}
      </header>
      <ModalWindow
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  )
}

export default Header
