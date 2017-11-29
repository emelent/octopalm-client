import React from 'react'
import {compose, withProps} from 'recompose'
import ScreenType from '../../hocs/ScreenType'

import BaseView from '../../components/BaseView'
import ManagerSideBar from '../../components/ManagerSideBar'
import ManagerSideView from '../../components/ManagerSideView'


const style = {
	container: {
		position: 'absolute',
		width: '100%',
		height: '100%'
	}
}

const ManagerView = ({screenType}) => (
	<div style={style.container}>
		<ManagerSideBar screenType={screenType}/>
		<ManagerSideView screenType={screenType}/>
	</div>
)

const enhance = compose(
	withProps({
		Component: ManagerView,
		title: "Timetable Manager",
		burgerToggle: () => {console.log('Toggle Menu')}
	}),
	ScreenType
)

export default enhance(BaseView)
