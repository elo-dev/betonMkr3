import React, { useEffect, useRef, useState } from 'react'
import { Button, Menu, Typography } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import ModalWindow from '../Modal/Modal'

import style from './Header.module.scss'

const { Title, Text } = Typography
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
        <div className={style.header__wrapper}>
          <div className={style.header__logo}>
            <Link to="/">
              <Title className={style.header__title} level={1}>
                МКР
              </Title>
            </Link>
          </div>

          <div className={style.header__info}>
            <div className={style.info}>
              <a
                className={style.info__email}
                href="mailto:mkrbeton@mail.ru?subject=Заявка на бетон"
              >
                mkrbeton@mail.ru
              </a>
              <a className={style.info__phoneNum} href="tel:+78003336420">
                8 (800) 333-64-20
              </a>
              <a className={style.info__phoneNum} href="tel:+74993436420">
                8 (499) 343-64-20
              </a>
              <button
                className={style.info__callback}
                type="primary"
                onClick={showModal}
              >
                Обратный звонок
              </button>
            </div>
            {isMobile >= 768 ? (
              <div className={style.header__menu}>
                <ul className={style.menu}>
                  <li className={style.menu__item}>
                    <Link className={style.link} to="/beton">
                      Бетон
                    </Link>
                  </li>
                  <li className={style.menu__item}>
                    <Link className={style.link} to="/solutions">
                      Раствор
                    </Link>
                  </li>
                  <li className={style.menu__item}>
                    <Link className={style.link} to="/calculations">
                      Фундамент
                    </Link>
                  </li>
                  <li className={style.menu__item}>
                    <Link className={style.link} to="/delivery">
                      Доставка и оплата
                    </Link>
                  </li>
                  <li className={style.menu__item}>
                    <Link className={style.link} to="/contacts">
                      Контакты
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
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
            )}
          </div>
        </div>
      </header>
      <ModalWindow
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  )
}

export default Header
