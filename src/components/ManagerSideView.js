import React from 'react'
import {withProps} from 'recompose'

import SideView from './SideView'
import TimetableView from './TimetableView'


const ManagerSideView = () => (
	<TimetableView />
)

const enhance = withProps({Component: ManagerSideView})
export default enhance(SideView)