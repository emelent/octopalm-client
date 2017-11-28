import React from 'react'

import {colors} from '../constants'
import NavBar from './NavBar'

const style = {
	container:{
		backgroundColor: colors.background,
		minHeight: '100vh',
		width: '100vw',
		color: colors.color2
	}
}

const Base = ({Component, burgerToggle, ...props}) => (
	<div style={style.container}>
		<NavBar screenType={props.screenType}
			burgerToggle={burgerToggle}
		/>
		<Component  {...props} />
	</div>
)

export default Base