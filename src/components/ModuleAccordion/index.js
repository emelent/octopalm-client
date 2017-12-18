import React from 'react'
import cn from 'classnames'
import {withState} from 'recompose'
import {colors} from '../../constants'
import {pickRandom} from '../../utils'
import Icon from '../Icon'
import './style.scss'


let mods = [
	{
		code: 'COS 132',
		color: pickRandom(colors),
		groups: [
			'G1 (English)',
			'G2 (English)',
			'G3 (English)',
			'G4 (Afrikaans)',
			'G5 (Bilingual)'
		]
	},
	{
		code: 'WTW 114',
		color: pickRandom(colors),
		groups: [
			'G1 (English)',
			'G2 (English)',
			'G3 (English)',
			'G4 (Afrikaans)',
			'G5 (Bilingual)',
			'G6 (Bilingual)'
		]
	},
	{
		code: 'WTW 115',
		color: pickRandom(colors),
		groups: [
			'G1 (English)',
			'G2 (English)',
			'G3 (Afrikaans)',
			'G4 (Bilingual)',
			'G5 (Bilingual)'
		]
	},
	{
		code: 'STK 110',
		color: pickRandom(colors),
		groups: [
			'G1 (English)',
			'G2 (English)',
			'G3 (English)',
			'G4 (Afrikaans)'
		]
	},
	{
		code: 'SLK 110',
		color: pickRandom(colors),
		groups: [
			'G1 (English)',
			'G2 (English)',
			'G3 (Afrikaans)'
		]
	}
]

const renderGroups = groups => groups.map(group =>(
	<div className="-mod-groups bg-near-white pointer pa2 f4" key={group}>
		{group} {Math.random() > 0.8 && <Icon name="mdi mdi-check-all"/>}
	</div>
))

const renderList = (setActiveModule, activeModule) => mods.map(mod => (
	<div key={mod.code}
		className={cn('-mod-container', {
			'-active': activeModule === mod.code
		})}
		style={{
			height: (activeModule === mod.code)? 30 + (45 * mod.groups.length):40
		}}
	>
		<div className="-mod-title ph2 f4 pointer hover-light-blue"
			onClick={() => activeModule===mod.code? setActiveModule(null):setActiveModule(mod.code)}
		>
			<Icon style={{color: mod.color}}
				className="mdi mdi-cisco-webex"
			/>
			{' '}
			{mod.code} {Math.random() > 0.7 && <Icon className="blue" name="mdi mdi-check"/>}
		</div>

		<div>
			{renderGroups(mod.groups)}
		</div>
	</div>
))

const ModuleAccordion = ({setActiveModule, activeModule, className, ...props}) => (
	<div {...props}
		className={cn('-mod-accordion', className)}
	>
		{renderList(setActiveModule, activeModule)}
	</div>
)
const enhancer = withState('activeModule', 'setActiveModule', null)

export default enhancer(ModuleAccordion)
