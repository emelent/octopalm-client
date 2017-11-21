import React from 'react'
import {withProps} from 'recompose'

import {dimensions, colors} from '../constants'

const getContentMargin = screenType => dimensions['contentMargin' + screenType]
const getNavbarHeight = screenType => dimensions['contentMargin' + screenType]

const style = {
	container:{
		backgroundColor: colors.color1
	},
	navBar:{
		backgroundColor: colors.color5,
		width: '100vw'
	},
	content:{
		position: 'absolute'

	}
}

const Base = ({Component, screenType, contentMargin, navBarHeight}) => (
	<div style={style.container}>
		<div style={{...style.navBar, ...{height: navBarHeight}}} />
		<div style={{...style.content, ...{
			left: contentMargin, right: contentMargin,
			top: contentMargin, bottom: contentMargin
		}}}>
			<Component screenType={screenType}/>
		</div>
	</div>
)

const enhance = withProps({
	createProps: props => ({...props, ...{
		contentMargin: getContentMargin(props.screenType),
		navBarHeight: getNavbarHeight(props.screenType)
	}})
})

export default enhance(Base)