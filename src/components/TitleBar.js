import React from 'react'

import {dimensions, fontSizes} from '../constants'

const style = {
	container:{
		width: '100%',
		padding: 10
	}
}

const TitleBar = ({screenType, title}) => (
	<div className="TBar" style={{
		...style.container,
		height:height(screenType),
		fontSize:fontSizes[`medium${screenType}`] }}
	>
		{title}
	</div>
)


const height = screenType => (
	dimensions[`navBarHeight${screenType}`] - dimensions[`contentMargin${screenType}`]
)


export default  TitleBar