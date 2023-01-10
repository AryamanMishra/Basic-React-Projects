import React from 'react'
import {data} from './data'
import List from './List'

const App = () =>{
	const [people,setPeople] = React.useState(data)
	return (
		<div className='main-body'>
			<h1> {people.length} Birthdays Today </h1>
			<List people={people}/>
			<button onClick={()=> setPeople([])} className='allclear'>Clear All</button>
		</div>
	)
}

export default App
