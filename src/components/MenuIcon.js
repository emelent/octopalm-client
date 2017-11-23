import React from 'react'

const style = {
	container:{
		paddingTop: 5,
		cursor: 'pointer'
	},
	bar: {
		width: 30,
		height: 2,
		margin: 5,
		backgroundColor: '#222'
	}
}
const MenuIcon = () => (
	<div style={style.container}>
		<div style={style.bar} />
		<div style={style.bar} />
	</div>
)

export default MenuIcon