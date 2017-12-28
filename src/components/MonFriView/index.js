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

const dayViewComponents = dayEvents => dayEvents?
	days.map(
		day => (
		<DayView day={dayEvents[day]} key={day}/>
	)): null

const dayViewTitles = days.map(
	day => (
		<div key={day}>{day.substr(0, 3)}</div>
	)
)

const getDayEvents = timetable => timetable.events?
	timetable.events.reduce(
		(dayEvents, event) => {
			if (dayEvents[event.day])
				dayEvents[event.day] = [...dayEvents[event.day], event]
			else dayEvents[event.day] = [event]
			return dayEvents
		}, {}
	): null

const WithTimetable = ({timetable}) => (
	<div className="-with-timetable">
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
const WithoutTimetable = () => (
	<div className="mt7 tc f3 gray -without-timetable">
		<span className="mdi mdi-plus-box-outline f2"/><br/>
		Create a new timetable.
	</div>
)

const MonFriView = ({className, timetable, ...props}) => (
	<div {...props}
		className={cn('-monfri-view', className)}
	>
	{timetable?
		<WithTimetable timetable={timetable} />
		:
		<WithoutTimetable/>
	}
	</div>
)

export default MonFriView