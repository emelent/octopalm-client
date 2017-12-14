import React from 'react'
import cn from 'classnames'

const Icon = ({name, ...props}) => (
	<span className={cn('dib', name, props.className)}
		{...props} />
)

export default Icon