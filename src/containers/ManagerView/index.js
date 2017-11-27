import React from 'react'
import {compose, withProps} from 'recompose'
import ScreenType from '../../hocs/ScreenType'

import BaseView from '../../components/BaseView'


const style = {
	container: {
		position: 'absolute',
		width: '100%',
		height: '100%'
	}
}

const ManagerView = () => (
	<div style={style.container} />
)

const enhance = compose(
	withProps({
		Component: ManagerView,
		burgerToggle: () => {console.log('Toggle Menu')}
	}),
	ScreenType
)

export default enhance(BaseView)
