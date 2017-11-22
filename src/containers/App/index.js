import React from 'react'
import {compose, withProps} from 'recompose'
import {connect} from 'react-redux'

import BaseView from '../../components/BaseView'


const Component = () => (
	<div>
		<h1>The Most Amazing App</h1>
	</div>
)

const mapStateToProps = state => ({
	screenType: state.ui.screenType
})

const enhance = compose(
	withProps({Component}),
	connect(mapStateToProps)
)

export default enhance(BaseView)
