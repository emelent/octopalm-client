import React from 'react'
import {Route} from 'react-router'

import App from '../containers/App'
import Other from '../containers/Other'
import ManagerView from '../containers/ManagerView'


const Routes = () => (
	<div>
		<Route exact path="/" component={App}/>
		<Route path="/other" component={Other}/>
		<Route path="/manager" component={ManagerView}/>
	</div>
)

export default Routes