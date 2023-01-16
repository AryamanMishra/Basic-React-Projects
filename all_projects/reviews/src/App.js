import React from 'react'
import Review from './Review'

const App = ()=> {
	return (
		<main>
			<section className='main-body'> 
				<div className='title'>
					<h2>Some Reviews</h2>
					<div className='underline'></div>
				</div>
				<Review />
			</section>
		</main>
	)
}

export default App
