import React from 'react'
import {colors} from '../constants'
import DayView from './DayView'
import TimeView from './TimeView'


const style = {
	container: {
		width: '100%',
		padding: 10,
		height: '80vh'
	},
	timetable: {
		height: '100%',
		border: '1px solid',
		background: colors.base,
		overflow: 'scroll',
		borderColor: colors.border1
	},
	dayViews: {
		overflow: 'hidden'
	}
}

const dayViews = () =>(
	['Monday', 'Tuesday','Wednesday','Thursdsay','Friday'].map(day => (
		<DayView day={day} key={day}/>
	))
)

const TimetableView = () => (
	<div style={style.container}>
		<div style={style.timetable}>
			<TimeView />
			<div style={style.dayViews}>
				{dayViews()}
			</div>
		</div>
	</div>
)

export default TimetableView