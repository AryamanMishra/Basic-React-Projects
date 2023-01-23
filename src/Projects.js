import React from 'react'
import Card from './Card'


const Projects = ({data})=> {
	return (
		<div className='projects-center'>
			{
				data.map((project)=> {
					return <Card {...project} key={project.id}/>
				})
			}
		</div>
	)
}




export default Projects
