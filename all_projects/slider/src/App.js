import React from 'react'
import data from './data'
import { FaChevronLeft,FaChevronRight,FaQuoteRight } from 'react-icons/fa'



const App = ()=> {

	const [index,setIndex] = React.useState(0)
	const [people,setPeople] = React.useState(data)


	const prevItem = ()=> {
		setIndex((oldIndex) => {
			let index = oldIndex - 1
			if (index < 0)
				index = people.length - 1
			return index
		})
	}

	const nextItem = ()=> {
		setIndex((oldIndex) => {
			let index = oldIndex + 1
			if (index >= people.length)
				index = 0
			return index
		})
	}


	React.useEffect(() => {
		let slider = setInterval(() => {
			setIndex((oldIndex)=> {
				let index = oldIndex + 1
				if (index >= people.length)
					index = 0
				return index
			})
		},5000)	

		return ()=> {
			clearInterval(slider)
		}
	}, [index])


	
	return (
		<main>
			<div className='main-body'>
				<div className='title'>
					 <h2> <span>/</span> Reviews</h2>
				</div>
				<div className='review-center'>
				{
					people.map((person,personIndex) => {
						const { id,image,name,title,quote } = person

						let position = 'nextSlide'
						if (personIndex === index) {
							position = 'activeSlide'
						}
						if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
							position = 'lastSlide'
						}

						return (
							<article className={position} key={id}>
								<img src={image} alt={name} className='person-img' />
								<h4 className='name'>{name}</h4>
								<p className='person-title'>{title}</p>
								<p className='quote'>{quote}</p>
							</article>
						)
					})
				}
					<button onClick={()=>prevItem()} className='prev'>
						<FaChevronLeft />
					</button>
					<button onClick={()=>nextItem()} className='next'>
						<FaChevronRight />
					</button>
					<FaQuoteRight className='quoteRight'/>
				</div>
			</div>
		</main>
	)
}



export default App
