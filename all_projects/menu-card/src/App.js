import React,{useState} from 'react'
import Menu from './Menu'
import data from './data'
import Categories from './Categories'
const allCategories = ['all', ...new Set(data.map((item) => item.category))];

const App = () => {

	const [menu, setMenu] = useState(data)
	const [categories,setCategories] = useState(allCategories)

	const filterItems = (category) => {
		if (category === 'all') {
			setMenu(data)
		}
		else {
			setMenu(data.filter((item)=> item.category === category))
		}
	}
	return (
		<main>
			<div className='main-body'>
				<div className='title'>
					<h2>Our Menu</h2>
					<div className='underline'></div>
				</div>
				<Categories categories={categories} filterItems={filterItems}/>
				<Menu menu={menu}/>
			</div>
		</main>
	)
}
export default App
