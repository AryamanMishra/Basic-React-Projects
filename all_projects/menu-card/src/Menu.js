import React from 'react'
import Item from './Item'


const Menu = ({menu}) => {
    return (
        <div className='menu'> 
            {
                menu.map((item,idx)=> {
                    return <Item {...item} key={idx} />
                })
            }
		</div>
    )
}


export default Menu
