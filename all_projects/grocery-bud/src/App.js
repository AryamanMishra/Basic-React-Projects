import React, {useState} from 'react'
import List from './List'


const App = ()=> {

	const removeItem = (id)=> {
		setItemList(itemList.filter((item)=>item.id !== id))
	}
	const [item,setItem] = useState('')
	const [itemList,setItemList]=  useState([])

	const handleSubmit = (event)=> {
		event.preventDefault()
		if (item) {
			const listElem = {id:new Date().getTime().toString(), item}
			setItemList([...itemList,listElem])
			setItem('')
		}
		else {
			console.log('empty value')
		}
	}
	return (
		<main>
			<div className='list-center'>
				<form action="form" onSubmit={handleSubmit}>
					<h3>Grocery Bud</h3>
					<div className='form-control'>
						<input 
							type="text" 
							name="item" 
							id="item"
							placeholder='e.g. aaloo, pyaaz'
							value={item}
							onChange={(event) => setItem(event.target.value)}
						/>
						<button type='submit'>Add</button>
					</div>
				</form>
				<List itemList={itemList} removeItem={removeItem}/>
			</div>
		</main>
	)
}

export default App
