import React from 'react'
import { Carousel, Col, Layout, Row, Typography } from 'antd'

import icon1 from '../../assets/icons/icon1.png'
import icon2 from '../../assets/icons/icon2.png'
import icon3 from '../../assets/icons/icon3.png'

import work2 from '../../assets/img/work2.jpg'
import work3 from '../../assets/img/work3.jpg'
import work4 from '../../assets/img/work4.jpg'

import style from './ConcreteFiller.module.scss'

const { Title } = Typography

const ConcreteFiller = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Layout className={style.concrete_filler}>
      <Title>НАПОЛНИТЕЛЬ БЕТОНА (ГРАНИТ, ГРАВИЙ)</Title>
      <Row gutter={50} align="middle" className={style.row}>
        <Col sm={24} md={24} lg={10} xl={10}>
          <div className={style.wrapper}>
            <p className={style.wrapper__text}>
              ЧАСТО ЗАДАВАЕМЫЙ ВОПРОС КЛИЕНТОВ - "КАКОЙ НАПОЛНИТЕЛЬ ВЫБРАТЬ?",
              ИЛИ "ЧЕМ ЛУЧШЕ ГРАНИТНЫЙ ЩЕБЕНЬ ГРАВИЙНОГО?"
            </p>
          </div>
        </Col>
        <Col sm={24} md={24} lg={14} xl={14}>
          <p className={style.text}>
            Если по той или иной причине у вас нет проекта или вы думаете какой
            выбрать наполнитель в бетон, так как ходит миф, что бетон на граните
            прочнее и лучше, вы заблуждаетесь. Гранитный щебень используют в
            качестве наполнителя в бетоне класса М 400 (БСГ В30 П3F300W8) и
            выше, так как большое количество цемента образует цементный камень
            прочнее гравийного щебня (наполнителя), в связи с этим дабы
            наполнитель не уступал по прочности цемента (вяжущего) и не разрушал
            его, бетоны наполняют гранитом. Прочность гранита - "марка щебня по
            дробимости" от 1200 до 1400. Все классы бетона до М 350 (БСГ В25
            П3F200W8) наполняют гравием так как гравийный щебень с легкостью
            выдерживает цементный камень и то количество вяжущего (цемента)
            которое используется в любой марки начиная от М 50 заканчивая М 350.
            Прочность гравия (марка щебня по дробимости от 800-1000).
          </p>
        </Col>
      </Row>
      <Row gutter={50} align="middle" className={style.row}>
        <Col sm={24} md={24} lg={10} xl={10}>
          <p className={style.text}>
            В состав любого бетонного раствора входит наполнитель - гравий,
            гранитная крошка, диабаз, керамзит и т.д. Именно от данного
            материала зависит итоговая плотность смеси, которая влияет на
            устойчивость бетона к влаги, морозам, нагрузкам и температурным
            режимам. Раствор бетона разной марки разделяют по видам плотности:
          </p>
        </Col>
        <Col sm={24} md={24} lg={14} xl={14}>
          <Carousel {...settings}>
            <div>
              <img className={style.carousel_img} src={work2} alt="logo" />
            </div>
            <div>
              <img className={style.carousel_img} src={work3} alt="logo" />
            </div>
            <div>
              <img className={style.carousel_img} src={work4} alt="logo" />
            </div>
          </Carousel>
        </Col>
      </Row>
      <Row gutter={16} className={style.moreInfo}>
        <Col sm={24} md={24} lg={8} xl={8}>
          <img className={style.icon} src={icon2} alt="icon1" />
          <div>
            <Title className={style.title} level={5}>
              ЛЕГКИЕ
            </Title>
            <p className={style.text}>
              Имеют плотность от 500 до 1800 кг/м3 и производятся с
              использованием простых наполнителей.
            </p>
          </div>
        </Col>
        <Col sm={24} md={24} lg={8} xl={8}>
          <img className={style.icon} src={icon1} alt="icon2" />
          <div>
            <Title className={style.title} level={5}>
              ТЯЖЕЛЫЕ
            </Title>
            <p className={style.text}>
              Имеют величину от 1800 до 2500 кг/м3. В таких смесях наполнителем
              являются горные породы.
            </p>
          </div>
        </Col>
        <Col sm={24} md={24} lg={8} xl={8}>
          <img className={style.icon} src={icon3} alt="icon3" />
          <div>
            <Title className={style.title} level={5}>
              ОСОБЫЕ
            </Title>
            <p className={style.text}>
              Характеризуются по плотности, начиная с величины 2500 кг/м3 и
              выше. В качестве основы для наполнителя идут такие вещества, как
              стальная стружка, барит, железная руда и т.д.
            </p>
          </div>
        </Col>
      </Row>
    </Layout>
  )
}

export default ConcreteFiller
