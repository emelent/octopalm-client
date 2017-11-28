import React from 'react'

import {colors} from '../constants'


const style = {
	container:{
		paddingTop: 18,
		cursor: 'pointer'
	},
	bar: {
		width: 30,
		height: 2,
		margin: 5,
		backgroundColor: colors.textDark
	}
}
const MenuIcon = () => (
	<div style={style.container}>
		<div style={style.bar} />
		<div style={style.bar} />
	</div>
)

export default MenuIcon