import React from 'react'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import configureStore, {history} from '../../redux/store'
import Routes from '../../components/Routes'
import {Action} from '../../utils'


const store = configureStore()

// get screensize data to redux
const updateScreenSize = () => store.dispatch(Action('RESIZE', {
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