import React from 'react'
import {Route} from 'react-router'

import ManagerView from '../containers/Manager'
import TitleBar from '../components/TitleBar'

const Routes = () => (
	<div>
		<TitleBar />
		<div>
			<Route exact path="/" component={ManagerView}/>
		</div>
	</div>
)

export default Routes