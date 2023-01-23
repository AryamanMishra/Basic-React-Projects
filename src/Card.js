import React from 'react'


const Card = ({ img,title,link })=> {
	return (
		<div className='single-item'>
			<a href={link} target='_blank' rel="noreferrer">
				<div className='img-container'>
					<img src={img} alt="hiii" />
				</div>
				<div className='item-title'>
					<h4>{title}</h4>
				</div>
			</a>
		</div>
	)
}



export default Card
