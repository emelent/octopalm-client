import React from 'react'
import cn from 'classnames'

import './style.scss'


const Button = ({title, children, ...props}) => (
	<button {...props}
		className={
			cn('button v-mid', props.className)
		}
	>{title || children}</button>
)

export default Button