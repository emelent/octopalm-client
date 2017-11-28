import React from 'react'
import {withProps} from 'recompose'

import {fontSizes, colors} from '../constants'
import SideBar from './SideBar'


const style = {
	container: {
		backgroundColor: colors.base,
		height: '100%'
	},
	title: {
		backgroundColor: colors.theme,
		width: '100%',
		height: 100,
		lineHeight: '100px',
		paddingLeft: 10,
		color: colors.textLight,
		fontSize: fontSizes.medium,
		fontWeight: 200
	}
}
const SideBarContent = () => (
	<div style={style.container}>
		<div style={style.title}>
			Modules
		</div>
		SideBar stuff happening
	</div>
)

const enhance = withProps({
	Component: SideBarContent
})

export default enhance(SideBar)