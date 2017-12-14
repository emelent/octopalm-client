import React from 'react'
import cn from 'classnames'

const Icon = ({name, ...props}) => (
	<div className={cn('dib', name, props.className)}
		{...props} />
)

export default Icon