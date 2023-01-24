import React from 'react'
import {data} from './data'
import List from './List'

const App = () =>{

	const [people,setPeople] = React.useState(data)
	return (
		<main>
			<div className='main-container'>
				<div className='title'> 
					{people.length === 1 ? <h2>{people.length} Birthday Today</h2> : <h2>{people.length} Birthdays Today</h2>}
				</div>
				<List people={people}/>
				<button onClick={()=> setPeople([])} className='allclear'>Clear All</button>
			</div>
		</main>
	)
}

export default App
