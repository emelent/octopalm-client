import React from 'react'

import {colors, fontSizes} from '../constants'


const startTime = 7
const endTime = 21

const styles = {
	container:{
		float: 'left',
		width: '80px',
		minHeight: '100%',
		overflow: 'hidden',
		textAlign: 'center'
	},
	title:{
		width: '100%',
		height:  60,
		lineHeight: '60px',
		fontSize: fontSizes.smallMD,
		textTransform: 'uppercase',
		background: colors.accent
	},
	times:{
		padding: 10
	},
	time: {
		height: 100
	}
}


const iToTime = i => (startTime + i < 10)?
	'0' + (startTime + i) + ':00' : '' + (startTime + i) + ':00'

const times = Array(...{length: endTime - startTime})
	.map((_, i) => iToTime(i))

const dayTimes = times.map(time => (
	<div style={styles.time} key={time}>{time}</div>
))

const TimeView = () => (
		<div style={styles.container}>
			<div style={styles.title}>
				Time
			</div>
			<div style={styles.times}>
				{dayTimes}
			</div>
		</div>
)

export default TimeView