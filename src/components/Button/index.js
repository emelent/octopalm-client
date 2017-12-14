import React from 'react'
import cn from 'classnames'

import './style.scss'


const Button = ({title, ...props}) => (
	<button {...props}
		className={
			cn('button v-mid', props.className)
		}
	>{title}</button>
)

export default Button