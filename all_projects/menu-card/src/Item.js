import React from 'react'


const Item = ({title,price,img,desc})=> {
	return (
		<div className='item'>
			<div className='header'>
				<img src={img} alt="img" />
				<h3>{title}</h3>
				<p>{price}</p>
			</div>
			<div className='desc'>
				<p>{desc}</p>
			</div>
		</div>
	)
}


export default Item
