import React from 'react'
import Tours from './Tours'
import Loading from './Loading'


const url = 'https://course-api.com/react-tours-project'

const App = () => {
	
	const [loading,setLoading] = React.useState(true)
	const [tours,setTours] = React.useState([])

	const removeTour = (id) => {
		const newTours = tours.filter((tour)=> {
			return tour.id !== id
		})
		setTours(newTours)
	}

	const fetchTours = async()=> {
		setLoading(true)
		try {
			const data = await fetch(url)
			const tours = await data.json()
			setLoading(false)
			setTours(tours)
		}
		catch (err) {
			setLoading(true)
			console.log(err)
		}
	}

	React.useEffect(()=> {
		fetchTours()
	},[])


	if (loading) {
		return (
			<main className='main'>
				<Loading />
			</main>
		)
	}

	if (tours.length === 0) {
		return (
			<main className='main'>
				<h1 className='notours'>No Tours to Show</h1>
				<button onClick={()=>fetchTours()} className='refresh'>Refresh</button>
			</main>
		)
	}

	return (
		<main className='main'>
			<Tours tours={tours} removeTour={removeTour}/> 
			<button className='clearall' onClick={()=>setTours([])}>Clear All</button>
		</main>
	)
}

export default App
