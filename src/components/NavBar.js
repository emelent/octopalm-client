import React from 'react'
import {branch, renderComponent} from 'recompose'

import {dimensions, colors, fontSizes} from '../constants'
import MenuIcon from './MenuIcon'


const style = {
	container: {
		width: '100%',
		height: dimensions.navBarHeight,
		lineHeight: dimensions.navBarHeight + 'px',
		padding: '0 10px',
		backgroundColor: colors.base,
		color: colors.textDark,
		fontWeight: 300,
		fontSize: fontSizes.small
	},
	items: {
		float: 'left',
		height: '100%',
		width: 200
	},
	component:{
		height: '100%',
		overflow: 'hidden'
	},
	menuIcon:{
		float: 'right',
		width: 40
	}
}

// normal navbar
const NavBar = ({Component}) => (
	<div style={style.container}>
		<div style={style.items}>
			Nav Items
		</div>
		<div style={style.component}>
			{Component && <Component />}
		</div>
	</div>
)

// mobile phone navbar
const NavBarXS = ({Component, burgerToggle}) => (
	<div style={style.container}>
		<div style={style.items}>
			Nav Items SM
		</div>

		{burgerToggle &&
			<div onClick={burgerToggle} style={style.menuIcon}>
				<MenuIcon />
			</div>
		}

		<div style={style.component}>
			{Component && <Component />}
		</div>
	</div>
)

const enhance = branch(
	 ({screenType}) => {
		return screenType === 'XS'
	},
	renderComponent(NavBarXS)
  )

export default enhance(NavBar)