import React from 'react'
import Card from './Card'


const Projects = ({data})=> {
	return (
		<div className='projects-center'>
			{
				data.map((project,index)=> {
					return <Card {...project} key={index}/>
				})
			}
		</div>
	)
}




export default Projects
