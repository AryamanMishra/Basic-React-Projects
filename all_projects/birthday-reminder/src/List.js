import React from 'react'


const List = ({people}) => {


	return (
		<div className='list'>
			{
				people.map((person) => {
					const {id,name,age} = person
					return (
						<div key={id} className='person'>
							<img src={require('./good.jpg')} alt="" />
							<h4>{name}</h4>
							<p>{age}</p> 
						</div>
					)
				})
			}
		</div>
	)
}


export default List
