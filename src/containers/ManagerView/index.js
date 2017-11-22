import React from 'react'
import {compose, withProps} from 'recompose'
import {connect} from 'react-redux'

import BaseView from '../../components/BaseView'
import TitleBar from '../../components/TitleBar'

const ManagerView = ({screenType}) => (
	<div className="athelas">
		<TitleBar
			title="Manager View"
			screenType={screenType}
		/>
	</div>
)

const mapStateToProps = state => ({
	screenType: state.ui.screenType
})

const enhance = compose(
	withProps({Component: ManagerView}),
	connect(mapStateToProps)
)

export default enhance(BaseView)
