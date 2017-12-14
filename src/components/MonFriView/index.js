import React from 'react'
import cn from 'classnames'
import DayView from '../DayView'
import TimeView from '../TimeView'
import './style.scss'

const days = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday'
]

const dayViewComponents = days.map(
		day => (
		<DayView day={day} key={day}/>
	))

const dayViewTitles = days.map(
	day => (
		<div key={day}>{day.substr(0, 3)}</div>
	)
)

const MonFriView = ({className,...props}) => (
	<div {...props}
		className={cn('-monfri-view', className)}
	>
		<div className="-title-row">
			<div>Time</div>
			{dayViewTitles}
		</div>
		<div className="-monfri-grid">
			<TimeView/>
			{dayViewComponents}
		</div>
	</div>
)

export default MonFriView