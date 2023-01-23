import React from 'react'
import Projects from './Projects'
import data from './data'

const App = () => {
	return (
		<main>
			<div className='main-body'>
				<div className='title'>
					<h2>Basic React Projects</h2>
					<div className='underline'></div>
				</div>
				<Projects data={data}/>
			</div>
		</main>
		

	)
}
export default App
