import React from 'react'


const styles = {
	container:{
		position: 'absolute',
		right: 0,
		top: 0,
		height:  '100%',
		zIndex: 2
	}
}

const width = screenType =>
	(screenType === 'XS')? '90%' : 300
	
const SideBar = ({screenType, Component}) => (
	<div style={{...styles.container,
		width: width(screenType)
	}}>
		<Component screenType={screenType} />
	</div>
)

export default SideBar