import React from 'react'


const Item = ({title,price,img,desc})=> {
	return (
		<article className='item'>
			<img src={img} alt="img" />
			<div className='item-info'>
				<header className='header'>
					<h3>{title}</h3>
					<p>${Math.floor(price)}</p>
				</header>
				<p id='desc'>{desc}</p>
			</div> 
		</article>
	)
}


export default Item
