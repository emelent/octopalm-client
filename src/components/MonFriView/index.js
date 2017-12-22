import React from 'react'
import cn from 'classnames'
import DayView from '../DayView'
import TimeView from '../TimeView'
import './style.scss'

const days = [
	'MONDAY',
	'TUESDAY',
	'WEDNESDAY',
	'THURSDAY',
	'FRIDAY'
]

const dayViewComponents = dayEvents => days.map(
		day => (
		<DayView day={dayEvents[day]} key={day}/>
	))

const dayViewTitles = days.map(
	day => (
		<div key={day}>{day.substr(0, 3)}</div>
	)
)

const getDayEvents = timetable => timetable.events.reduce(
	(dayEvents, event) => {
		dayEvents[event.day] = [...dayEvents[event.day], event]
		return dayEvents
	}
)

const MonFriView = ({className, timetable, ...props}) => (
	<div {...props}
		className={cn('-monfri-view', className)}
	>
		<div className="-title-row">
			<div>Time</div>
			{dayViewTitles}
		</div>
		<div className="-monfri-grid">
			<TimeView/>
			{dayViewComponents(getDayEvents(timetable))}
		</div>
	</div>
)

export default MonFriView