import React from 'react'
import {withProps} from 'recompose'

import SideBar from './SideBar'

const SideBarContent = () => (
	<div>
		SideBar stuff happening
	</div>
)

const enhance = withProps({
	Component: SideBarContent,
	title: "Manager SideBar"
})

export default enhance(SideBar)