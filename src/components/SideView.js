import React from 'react'

const styles = {
	container:{
		position: 'absolute',
		left: 0,
		top: 0,
		height:  '100%'
	}
}

const width = screenType =>
	(screenType === 'XS')? '100%' : 'calc(100% - 300px)'
	
const SideView = ({screenType, Component}) => (
	<div style={{...styles.container,
		width: width(screenType)
	}}>
		<Component screenType={screenType} />
	</div>
)

export default SideView