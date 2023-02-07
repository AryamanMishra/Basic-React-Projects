import React, {useContext} from 'react'
import {FaBars} from 'react-icons/fa'
import { AppContext } from './context'

const Home = ()=> {

	const {openSidebar,openModal} = useContext(AppContext)

	return (
		<main>
			<div className='main-body'>
				<button className="sidebar-toggle" onClick={openSidebar}>
					<FaBars />
				</button>
				<button className='modal-btn' onClick={openModal}>
					show modal
				</button>
			</div>
		</main>
	)
}



export default Home
