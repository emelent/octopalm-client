import React from 'react'

import {dimensions, fontSizes, colors} from '../constants'
import MenuIcon from './MenuIcon'

const style = {
	container: {
		width: '100%',
		padding: 10,
		paddingTop: 25,
		backgroundColor: colors.color5
	},
	title:{
		
	},
	menuIcon:{
		float: 'right'
	}
}

const height =  screenType => dimensions['navBarHeight' + screenType]
const fontSize =  screenType => fontSizes['medium' + screenType]

const NavBar = ({screenType, title, burgerToggle}) => (
	<div style={{
		...style.container,
		height: height(screenType)
	}}
	>
		<span style={{
			...style.title,
			fontSize: fontSize(screenType)}}
		>
			{title}
		</span>
		{burgerToggle &&
			<div onClick={burgerToggle} style={style.menuIcon}>
				<MenuIcon />
			</div>
		}

	</div>
)

export default NavBar