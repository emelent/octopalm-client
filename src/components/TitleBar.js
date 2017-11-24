import React from 'react'

import {fontSizes} from '../constants'

const style = {
	container:{
		width: '100%',
		height: 100,
		lineHeight: '100px',
		textAlign: 'center'
	}
}

const TitleBar = ({screenType, title, background='none'}) => (
	<div style={{
		...style.container,
		background,
		fontSize:fontSizes[`small${screenType}`] }}
	>
		{title}
	</div>
)

export default  TitleBar