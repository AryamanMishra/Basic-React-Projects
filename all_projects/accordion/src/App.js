import React from 'react'
import questions from './data'
import Question from './Question'

const App = ()=> {
	return (
		<main>
			<div className='container'>
				<h3 id='main-title'>Questions and Answers about Login</h3>
				<div className='info'>
					{
						questions.map((question)=> {
							return <Question key={question.id} {...question}/>
						})
					}
				</div>
			</div>
		</main>
	)
}


export default App
