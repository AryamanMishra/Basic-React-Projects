import React from 'react'

import { FaEdit, FaTrash } from 'react-icons/fa';

const List = ({itemList,removeItem})=> {
    return (
        <div className='actual-list'>
        {
            itemList.map((elem)=> {
                const {id,item} = elem
                return (
                    <div className='item' key={id}>
                        <p>{item}</p>
                        <button>
                            <FaEdit />
                        </button>
                        <button onClick={()=>removeItem(id)}>
                            <FaTrash />
                        </button>
                    </div>
                )
            })
        }
        </div>
    )
}


export default List
