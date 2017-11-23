import React from 'react'
import TitleBar from './TitleBar'

const styles = {
	container:{
		position: 'absolute',
		right: 0,
		top: 0,
		height:  '100%'
	}
}

const width = screenType =>
	(screenType === 'XS')? '80%' : 300
	
const SideBar = ({screenType, title, Component}) => (
	<div style={{...styles.container,
		width: width(screenType)
	}}>
		<TitleBar title={title} screenType={screenType}/>
		<Component screenType={screenType} />
	</div>
)

export default SideBar