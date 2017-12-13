
import React from 'react'
import './style.scss'

// {icon && <IconButton className="-toolbar-icon" />}
const ToolBar = ({style, Icon, onIconClick, Left, Right}) => (
	<div style={style} className="-toolbar">
		{Icon && (
			<div onClick={onIconClick}
				className="-toolbar-icon">
				<Icon />
			</div>
		)}
		<div className="-toolbar-left">
			<Left/>
		</div>
		<div className="-toolbar-right">
			<Right/>
		</div>
	</div>
)

export default  ToolBar