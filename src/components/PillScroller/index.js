import React from 'react'
import cn from 'classnames'
import {pickRandom} from '../../utils'
import Icon from '../Icon'
import {colors} from '../../constants'
import './style.scss'

const mods = [
	{name: 'COS 132', color: pickRandom(colors)},
	{name: 'COS 115', color: pickRandom(colors)},
	{name: 'STL 132', color: pickRandom(colors)},
	{name: 'AWO 102', color: pickRandom(colors)},
	{name: 'KEN 112', color: pickRandom(colors)},
	{name: 'WTW 115', color: pickRandom(colors)},
	{name: 'AOS 132', color: pickRandom(colors)},
	{name: 'LOL 102', color: pickRandom(colors)},
	{name: 'KOW 112', color: pickRandom(colors)},
	{name: 'PIE 112', color: pickRandom(colors)},
	{name: 'CHE 115', color: pickRandom(colors)},
	{name: 'WIO 132', color: pickRandom(colors)},
	{name: 'YIN 102', color: pickRandom(colors)},
	{name: 'GDE 112', color: pickRandom(colors)},
	{name: 'LOL 102', color: pickRandom(colors)},
	{name: 'KOW 112', color: pickRandom(colors)}
]

const pills = mods.map((mod, i) => (
	<div className="-pill dib"
		key={i}
		onClick={() => alert(mod.name)}
		style={{background: mod.color}}>{mod.name}</div>
))

const PillScroller = ({className, ...props}) => (
	<div {...props} className={cn('-pill-scroller', className)}>
		<Icon name="mdi mdi-chevron-left f3" />
		<div className="-pill-container">
			<div style={{}} className="-pills f6">
				{pills}
			</div>
		</div>
		<Icon name="mdi mdi-chevron-right f3" />
	</div>
)

export default PillScroller