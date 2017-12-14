
import React from 'react'
import './style.scss'


const ToolBar = ({style, Icon, onIconClick, Left, Right}) => (
	<div style={style} className="-toolbar">
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