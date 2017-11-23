import React from 'react'
import {compose, withHandlers} from 'recompose'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {push} from 'react-router-redux'

import logo from '../../assets/img/logo.svg'
import './Other.css'

const Other = ({mook, goHome}) =>(
	<div className="Other">
		<header className="Other-header">
			<img src={logo} className="Other-logo" alt="logo" />
			<h1 className="Other-title">Welcome to the Other Page</h1>
		</header>
		<p className="Other-intro">
          To get started, edit <code>src/Other.js</code> and save to reload.
		</p>
		<button onClick={mook}>Mook</button>
		<button onClick={goHome}>Go Home</button>
	</div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
	mook: () => ({type: 'MOOK'}),
	push
}, dispatch)

const mapStateToProps = () => ({

})

const enhance = compose(
	connect(mapStateToProps, mapDispatchToProps),
	withHandlers({
		goHome: ({push}) => () => push('/')
	})
)

export default enhance(Other)
