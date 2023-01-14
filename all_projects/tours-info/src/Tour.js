import React from 'react'


const Tour = ({id,name,info,image,price,removeTour}) => {

    const [readMore,setReadMore] = React.useState(true)
    return (
        <div className='item'>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p>
                {readMore ? `${info.substring(0, 200)}...` : info}
                <button className='rmbtn' onClick={()=>setReadMore(!readMore)}>
                    {readMore ? 'Read More' : 'Show Less'}
                </button>
            </p>
            <button className='btn' onClick={()=>removeTour(id)}> Remove Tour</button>
        </div>
    )
}

export default Tour
