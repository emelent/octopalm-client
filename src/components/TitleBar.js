import React from 'react'

import {colors, dimensions, fontSizes} from '../constants'
import logoRes from '../img/logo.svg'

const style = {
	container:{
		width: '100%',
		height: dimensions.titleBarHeight,
		backgroundColor: colors.theme,
		lineHeight: dimensions.titleBarHeight + 'px',
		fontSize: fontSizes.medium,
		color: colors.textLight
	},
	logo:{
		width: 44,
		marginTop: 15,
		float: 'left'
	},
	title:{
		fontWeight: '200'
	}
}

const TitleBar = ({title="The App"}) => (
	<div style={style.container}>
		<div>
			<img src={logoRes} style={style.logo} />
		</div>
		<span style={style.title}>{title}</span>
	</div>
)

export default  TitleBar