import React from 'react'


const StoreConnector = ({render, ...restOfProps}) => (
	<div>
		{render(restOfProps)}
	</div>
)

export default StoreConnector