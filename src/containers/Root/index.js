import React from 'react'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'

import configureStore, {history} from '../../redux/store'
import Routes from '../../components/Routes'
import {action} from '../../utils'

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = configureStore()
const updateScreenSize = () => store.dispatch(action('RESIZE', {
	width: window.innerWidth,
	height:  window.innerHeight
}))

window.document.body.onresize = updateScreenSize
updateScreenSize()
const Root = () => (
	<Provider store={store}>
		{ /* ConnectedRouter will use the store from Provider automatically */ }
		<ConnectedRouter history={history}>
			<Routes />
		</ConnectedRouter>
	</Provider>
)

export default Root