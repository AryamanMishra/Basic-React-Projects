import React, {useState,useEffect} from 'react'
import Alert from './Alert'
import List from './List'


const getLocalStorage = ()=> {
	let list = localStorage.getItem('list')
	if (list) {
		return JSON.parse(localStorage.getItem('list'))
	}
	else {
		return []
	}
}


const App = ()=> {

	const [name,setName] = useState('')
	const [itemList,setItemList]=  useState(getLocalStorage())
	const [isEditing,setIsEditing] = useState(false)
	const [editID,setEditID] = useState(null)
	const [alert,setAlert] = useState({show:false,msg:'',type:''})


	const showAlert = (show=false,msg='',type='')=> {
		setAlert({show,msg,type})
	}	


	const removeItem = (id)=> {
		showAlert(true,'item removed from the list','danger')
		setItemList(itemList.filter((item)=>item.id !== id))
	}

	const editItem = (id) => {
		const specificItem = itemList.find((item)=> item.id === id)
		setIsEditing(true)
		setEditID(id)
		setName(specificItem.title)
	}


	const clearList = ()=> {
		showAlert(true,'emptied list','danger')
		setItemList([])
	}
	

	const handleSubmit = (event)=> {
		event.preventDefault()
		if (!name) {
			showAlert(true,'please enter a value','danger')
		}
		else if (name && isEditing) {
			const newlist = itemList.map((item)=> {
				if (item.id === editID) {
					return {...item,title:name}
				}
				return item
			})
			setItemList(newlist)
			setName('')
			setEditID(null)
			setIsEditing(false)
			showAlert(true,'value edited successfully','success')
		}
		else { 
			const item = {id:new Date().getTime().toString(), title:name}
			showAlert(true,'item added to the list','success')
			setItemList([...itemList,item])
			setName('')
		}
	}


	useEffect(()=> {
		localStorage.setItem('list', JSON.stringify(itemList))
	},[itemList])


	return (
		<main>
			<div className='list-center'>
				<form className='form' onSubmit={handleSubmit}>
					{alert.show && <Alert {...alert} showAlert={showAlert}/>}
					<h2>Grocery Bud</h2>
					<div className='form-control'>
						<input 
							type="text" 
							name="item" 
							id="item"
							placeholder='e.g. aaloo, pyaaz'
							value={name}
							onChange={(event) => setName(event.target.value)}
						/>
						<button type='submit'>
							{isEditing ? 'Edit' : 'Add'}
						</button>
					</div>
				</form>
				{ itemList.length > 0 && 
					<List itemList={itemList} removeItem={removeItem} clearList={clearList} editItem = {editItem}/>}
			</div>
		</main>
	)
}

export default App
