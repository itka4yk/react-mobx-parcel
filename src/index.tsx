import * as React from 'react'
import { render } from 'react-dom'
import { enableLogging } from 'mobx-logger';
import './index.css'


enableLogging();

import Root from './App'

render(<Root />, document.getElementById('root'))
