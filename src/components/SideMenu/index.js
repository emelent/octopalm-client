import React from 'react'
import cn from 'classnames'

const style = (active, left) => (left?
	{left: active? 0: '-100%'}:
	{right: active? 0: '-100%'}
)



const SideMenu = ({left=false, active, onClose, className, children,...props}) => (
	<div {...props}
		style={style(active, left)}
		className={cn('vh-100 w-80 bg-white fixed z-2 top-0 -transition-ea', className)}
	>
		{children}
		<div className="-overlay -bg-darken w-20 h-100 fixed top-0 -transition-ea"
			style={style(active, !left)}
			onClick={onClose}
		/>
	</div>
)

export default SideMenu