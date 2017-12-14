import React from 'react'
import ReactDOM from 'react-dom'
import 'tachyons'

import Root from './containers/Root'
import registerServiceWorker from './registerServiceWorker'
import './index.scss'

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
