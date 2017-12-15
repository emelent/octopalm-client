import React from 'react'
import cn from 'classnames'

const Icon = ({name, ...props}) => (
	<span {...props}
		className={cn('dib', name, props.className)}/>
)

export default Icon