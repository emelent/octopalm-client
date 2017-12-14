import React from 'react'
import cn from 'classnames'
import './style.scss'


const DayView = ({className,...props}) => (
	<div {...props} className={cn('', className)}>
		<div className="-event-container" />
	</div>
)

export default DayView