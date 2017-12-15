import React from 'react'
import cn from 'classnames'
import './style.scss'


const SideMenu = ({active, className, children,...props}) => (
	<div {...props}
		style={{right: active? 0: '-200%'}}
		className={cn('vh-100 w-80 bg-white fixed z-2 top-0 right-0 -transition-ea', className)}
	>
		{children}
		<div className="-bg-darken w-20 h-100 fixed left-0 top-0 -transition-ea"
			style={{left: active? 0: '-100%'}}
		/>
	</div>
)

export default SideMenu