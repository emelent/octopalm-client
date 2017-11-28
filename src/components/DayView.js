import React from 'react'

import ScreenType from '../hocs/ScreenType'
import {fontSizes, colors} from '../constants'


const styles = {
	container:{
		float: 'left',
		width: '20%',
		minHeight: '100%',
		overflow: 'hidden',
		textAlign: 'center'
	},
	day:{
		width: '100%',
		height:  60,
		lineHeight: '60px',
		fontSize: fontSizes.smallMD,
		textTransform: 'uppercase',
		background: colors.accent
	},
	events:{
		padding: 10
	}
}

const dayTitle = (day, screenType) =>
	(['MD', 'LG'].indexOf(screenType) > -1)? day : day.slice(0,3)

const DayView = ({day, screenType}) => (
	<div className="avenir" style={styles.container}>
		<div style={styles.day}>
			{dayTitle(day, screenType)}
		</div>
		<div style={styles.events}>
			{day} events...
		</div>
	</div>
)

export default ScreenType(DayView)