import React from 'react'
import {withProps} from 'recompose'

import {colors} from '../constants'
import SideBar from './SideBar'


const style = {
	container: {
		padding: 10,
		textAlign: 'center'
	}
}
const SideBarContent = () => (
	<div style={style.container}>
		SideBar stuff happening
	</div>
)

const enhance = withProps({
	Component: SideBarContent,
	title: "MODULES",
	titleBg: colors.color5
})

export default enhance(SideBar)