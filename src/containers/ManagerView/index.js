import React from 'react'
import {compose, withProps} from 'recompose'
import ScreenType from '../../hocs/ScreenType'

import BaseView from '../../components/BaseView'
import ManagerSideBar from '../../components/ManagerSideBar'
import ManagerSideView from '../../components/ManagerSideView'


const ManagerView = ({screenType}) => (
	<div className="athelas">
		<ManagerSideView screenType={screenType} />
		<ManagerSideBar screenType={screenType}/>
	</div>
)

const enhance = compose(
	withProps({Component: ManagerView}),
	ScreenType
)

export default enhance(BaseView)
