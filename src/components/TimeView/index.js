import React from 'react'
import cn from 'classnames'
import './style.scss'

const start = 6
const end = 22

const times = Array(...{length: end - start})
	.map((_, i) => (
		((start + i) > 9)? `${start + i}:00`:`0${start + i}:00`
	))
	.map(time => (
		<div className="-time-block"
			key={time}
		>
			{time}
		</div>
	))

const timeView = ({className,...props}) => (
	<div {...props} className={cn('.-time-view', className)}>
		<div className="-time-container">
			{times}
		</div>
	</div>
)

export default timeView