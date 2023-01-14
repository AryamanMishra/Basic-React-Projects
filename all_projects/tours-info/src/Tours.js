import React from 'react'
import Tour from './Tour'


const Tours = ({tours,removeTour}) => {
    return (
        <div className='tours'>
            <div className='title'>
                <h1>All Tours</h1>
                <div className='underline'></div>
            </div>
            <div className='list'>
                {
                    tours.map((tour)=> {
                        return <Tour key={tour.id} {...tour} removeTour={removeTour} />
                    })
                }
            </div>
        </div>
    )
}

export default Tours
