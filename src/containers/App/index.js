import React from 'react'
import {compose, withProps} from 'recompose'
import ScreenType from '../../hocs/ScreenType'

import BaseView from '../../components/BaseView'


const Component = () => (
	<div>
		<h1>The Most Amazing App</h1>
	</div>
)

const enhance = compose(
	withProps({Component}),
	ScreenType
)

export default enhance(BaseView)
