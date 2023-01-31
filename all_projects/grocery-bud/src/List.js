import React from 'react'

import { FaEdit, FaTrash } from 'react-icons/fa';

const List = ({ itemList,removeItem,clearList,editItem })=> {
    return (
        <div className='actual-container'>
            <div className='actual-list'>
                {
                    itemList.map((item)=> {
                        const {id,title} = item
                        return (
                            <div className='item' key={id}>
                                <p>{title}</p>
                                <div className='item-btn-container'>
                                    <button onClick={() => editItem(id)}>
                                        <FaEdit />
                                    </button>
                                    <button onClick={() => removeItem(id)}>
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={clearList} className='clearall-btn'>Clear All Items</button>
        </div>
    )
}


export default List
