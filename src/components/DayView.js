import React from 'react'
import {dimensions} from '../constants'
import ScreenType from '../hocs/ScreenType'


const styles = {
	container:{
		display: 'inline-block',
		width: '20%',
		minHeight: '100%'
	},
	day:{
		width: '100%'
	}
}

const height = screenType => dimensions[`navBarHeight${screenType}`]
const DayView = ({day, screenType}) => (
	<div style={styles.container}>
		<div style={{
			...styles.day,
			height: height(screenType)
		}}
		>
			{day}
		</div>
		<div style={styles.events}>
			{day} events...
		</div>
	</div>
)

export default ScreenType(DayView)