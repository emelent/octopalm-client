import React from 'react'
import {withProps} from 'recompose'

import {dimensions, colors} from '../constants'


const style = {
	container:{
		backgroundColor: colors.color1,
		minHeight: '100vh',
		color: colors.color2
	},
	navBar:{
		backgroundColor: colors.color5,
		width: '100vw'
	},
	content:{
		position: 'absolute'

	}
}

const Base = ({Component, contentMargin, navBarHeight, ...props}) => (
	<div className="athelas" style={style.container}>
		<div style={{...style.navBar, height: navBarHeight}} />
		<div style={{...style.content,
			left: contentMargin, right: contentMargin,
			top: contentMargin, bottom: contentMargin
		}}>
			<Component  {...props} />
		</div>
	</div>
)

const enhance = withProps(({screenType}) => ({
	contentMargin: dimensions[`contentMargin${screenType}`],
	navBarHeight: dimensions[`navBarHeight${screenType}`]
}))

export default enhance(Base)