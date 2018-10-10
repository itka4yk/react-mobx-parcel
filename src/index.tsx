import * as React from 'react'
import { render } from 'react-dom'
import { enableLogging } from 'mobx-logger'
import App from './App'
import './index.css'

enableLogging()

render(<App />, document.getElementById('root'))
