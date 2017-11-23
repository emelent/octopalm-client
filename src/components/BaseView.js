import React from 'react'

import {colors} from '../constants'
import NavBar from './NavBar'

const style = {
	container:{
		backgroundColor: colors.color1,
		minHeight: '100vh',
		width: '100vw',
		color: colors.color2
	}
}

const Base = ({Component, title, burgerToggle, ...props}) => (
	<div className="avenir" style={style.container}>
		<NavBar screenType={props.screenType}
			title={title} burgerToggle={burgerToggle} />
		<Component  {...props} />
	</div>
)

export default Base