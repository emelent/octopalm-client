import React from 'react'
import {withProps} from 'recompose'

import {dimensions, fontSizes} from '../constants'

const style = {
	container:{
		width: '100%',
		padding: 10
	}
}

const TitleBar = ({title, height, fontSize}) => (
	<div style={{...style.container, height, fontSize}}>
		{title}
	</div>
)


const height = screenType => (
	dimensions[`navBarHeight${screenType}`] - dimensions[`contentMargin${screenType}`]
)

const enhance = withProps(({screenType}) =>  ({
	height: height(screenType),
	fontSize: fontSizes[`medium${screenType}`]
}))

export default  enhance(TitleBar)