import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'
const App = ()=> {
	
	const [isloading,setIsLoading] = React.useState(true)
	const [isError,setIsError] = React.useState(false)
	const [jobs,setJobs] = React.useState([])
	const [index,setIndex] = React.useState(0)

	const fetchData = async()=> {
		setIsLoading(true)
		try {
			const data = await fetch(url)
			const response = await data.json()
			setJobs(response)
			setIsLoading(false)
		}
		catch (err) {
			console.log(err)
			setIsError(true)
		}
	}

	React.useEffect(()=> {
		fetchData()
	},[])


	if (isloading) {
		return (
			<main>
				<div className='main-body'>
					<h1 id='loading'>Loading ...</h1>
				</div>
			</main>
		)
	}
	else if (isError) {
		return (
			<main>
				<div className='main-body'>
					<h1>Error</h1>
				</div>
			</main>
		)
	}

	const { company, dates, duties, title } = jobs[index]
	return (
		<main>
			<div className='main-body'>
				<div className='title'>
					<h1>Experience</h1>
					<div className='underline'></div>
				</div>
				<div className='jobs-center'> 
					<div className='btn-container'>
						{
							jobs.map((job,idx) => {
								return (
									<button 
										className={`job-btn ${idx === index && 'active-btn'}`}
										key={job.id}
										onClick={()=> setIndex(idx)}
									>
										{job.company}
									</button>
								)
							})
						}
					</div>
					<div className='jobs-info'>
						<h2>{title}</h2>
						<h4>{company}</h4>
						<p id='dates'>{dates}</p>
						{
							duties.map((duty,index)=> {
								return (
									<div className='job-desc'>
										<FaAngleDoubleRight className='arrow'/>
										<p key={index}>{duty}</p>
									</div>
								)
							})
						}
						</div>
					</div>
				</div>
		</main>
	)
}

export default App
