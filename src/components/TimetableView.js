import React from 'react'
import DayView from './DayView'

const style = {
	container: {
		width: '100%',
		minHeight: '100%'
	}
}

const dayViews = () =>(
	['Monday', 'Tuesday','Wednesday','Thursdsay','Friday'].map(day => (
		<DayView day={day} key={day}/>
	))
)

const TimetableView = () => (
	<div style={style.container}>
		{dayViews()}
	</div>
)

export default TimetableView