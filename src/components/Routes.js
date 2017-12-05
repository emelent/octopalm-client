import React from 'react'
import {Route} from 'react-router'

import Other from '../containers/Other'
import ManagerView from '../containers/ManagerView'
import TitleBar from '../components/TitleBar'

const Routes = () => (
	<div className="avenir">
		<TitleBar />
		<div>
			<Route exact path="/" component={ManagerView}/>
			<Route path="/other" component={Other}/>
		</div>
	</div>
)

export default Routes