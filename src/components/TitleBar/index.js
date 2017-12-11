
import React from 'react'

import {appName} from '../../constants'
// import logoRes from '../img/logo.svg'
import './style.css'

const TitleBar = ({title, style}) => (
	<div style={style}>
		{title || appName}
	</div>
)

export default  TitleBar