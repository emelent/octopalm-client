import React from 'react'
import {Route} from 'react-router'

import App from '../containers/App'
import Other from '../containers/Other'
import ManagerView from '../containers/ManagerView'
import TitleBar from '../components/TitleBar'

const Routes = () => (
	<div>
		<TitleBar />
		<div>
			<Route exact path="/" component={App}/>
			<Route path="/other" component={Other}/>
			<Route path="/manager" component={ManagerView}/>
		</div>
	</div>
)

export default Routes