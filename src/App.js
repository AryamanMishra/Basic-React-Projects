import React from 'react'

const App = () => {
	const links = ['https://birthday-reminder09.netlify.app/']
	return (
		<div className='main-body'>
			<h1>Basic React Projects</h1>
			<button><a href={links[0]}>Birthday Reminder</a></button>
		</div>
	)
}
export default App
