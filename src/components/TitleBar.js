import React from 'react'

import {colors, dimensions, fontSizes} from '../constants'

const style = {
	container:{
		width: '100%',
		height: dimensions.titleBarHeight,
		padding: 10,
		backgroundColor: colors.theme,
		lineHeight: '100px',
		textAlign: 'center',
		fontSizes: fontSizes.medium
	}
}

const TitleBar = ({title}) => (
	<div style={style.container}>
		{title}
	</div>
)

export default  TitleBar