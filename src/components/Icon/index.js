import React from 'react'


const Icon = ({name, ...props}) => (
	<span className={name} {...props} />
)

export default Icon