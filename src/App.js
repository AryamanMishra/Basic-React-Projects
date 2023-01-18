import React from 'react'

const App = () => {
	const links = [
		'https://birthday-reminder09.netlify.app/',
		'https://tours-info09.netlify.app/',
		'https://reviews09.netlify.app/',
		'https://accordion09.netlify.app/',
		'https://menu-card09.netlify.app/'
	]
	return (
		<div className='main-body'>
			<h1>Basic React Projects</h1>
			<button><a href={links[0]}>Birthday Reminder</a></button>
			<button><a href={links[1]}>Tours Info</a></button>
			<button><a href={links[2]}>Reviews</a></button>
			<button><a href={links[3]}>Accordion</a></button>
			<button><a href={links[4]}>Menu Card</a></button>
		</div>
	)
}
export default App
