
import React from 'react'
import cn from 'classnames'


import './style.scss'


const ToolBar = ({Icon, onIconClick, Left, Right, className, ...props}) => (
	<div {...props} className={cn('-toolbar', className)}>
		{Icon &&
			<div onClick={onIconClick}
				className="-toolbar-icon">
				{Icon}
			</div>
		}

		{Left &&
			<div className="-toolbar-left">
				{Left}
			</div>
		}

		{Right &&
			<div className="-toolbar-right">
				{Right}
			</div>
		}
	</div>
)

export default  ToolBar