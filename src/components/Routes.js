import React from 'react'
import {Route} from 'react-router'

import ManagerView from '../containers/Manager'

const Routes = () => (
	<div>
		<Route exact path="/" component={ManagerView}/>
	</div>
)

export default Routes