import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'

import 'antd/dist/antd.css'

import { BrowserRouter } from 'react-router-dom'
import { YMaps } from 'react-yandex-maps'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={'/betonMkr3/'}>
      <YMaps>
        <App />
      </YMaps>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
