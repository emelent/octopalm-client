import React from 'react'
import cn from 'classnames'
import Icon from '../Icon'
import './style.scss'

const renderOptions = opts => opts.map(
	opt => (
		<div key={opt}
			className="-opt f3"
		>{opt}</div>
	)
)
const OptsMenu = ({title, onClose, options, className, ...props}) => (
	<div {...props} className={cn('tc fixed absolute--fill bg-white', className)}>
		<div className="-opts-title f3">{title}</div>
		<div className="-opts-container overflow-scroll">
			{renderOptions(options)}
		</div>
		<Icon onClick={onClose}
			className="absolute left-0 bottom-0 -em2 -opt-close hover-black"
			name="mdi mdi-close"/>
	</div>
)

export default OptsMenu