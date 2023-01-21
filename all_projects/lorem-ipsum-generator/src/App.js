import React, {useState} from 'react'
import text from './data'


const App = ()=> {

	const [paragraphs,setParagraphs] = useState(0)
	const [content,setContent] = useState([])

	const handleSubmit = (event)=> {
		event.preventDefault()
		let count = parseInt(paragraphs)
		if (count < 0)  {
			count = 1
			alert('So now you want negative number of paragraphs?? \nTake 1')
		}
		if (count > 9) {
			count = 9
			alert('Best I can do is 9')
		}
		setParagraphs(count)
		setContent(text.slice(0,count))
	}
	return (
		<main>
			<div className='main-body'>
				<div className='title'>
					<h2>TIRED OF BORING LOREM IPSUM?</h2>
				</div>
				<form className='form' onSubmit={handleSubmit}>
					<label htmlFor="paragraphs">Paragraphs:</label>
					<input 
						type="number" 
						id='paragraphs'
						name='paragraphs'
						value={paragraphs}
						onChange={(event)=>setParagraphs(event.target.value)}
					/>
					<button>Generate</button>
				</form>
				<div className='content-section'>
					{
						content.map((item,idx)=> {
							return <p key={idx}>{item}</p>
						})
					}
				</div>
			</div>
		</main>
	)
}


export default App
