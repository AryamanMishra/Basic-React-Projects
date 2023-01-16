import React from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import reviews from "./data";


const Review = ()=> {

	const [index,setIndex] = React.useState(0)

	const {name,job,image,text} = reviews[index]

	const checkIndex = (idx) => {
		if (idx < 0)
			return reviews.length - 1
		if (idx >= reviews.length)
			return 0
		return idx
	}

	const previousReview = ()=> {
		setIndex((index)=> {
			let newIndex = index - 1
			return checkIndex(newIndex)
		})
	}

	const nextReview = ()=> {
		setIndex((index) => {
			let newIndex = index + 1
			return checkIndex(newIndex)
		})
	}

    return (
       <article className="review">
			<div className="img-container">
				<img src={image} alt="img" />
			</div>
			<h3>{name}</h3>
			<p>{job}</p>
			<p>{text}</p>
			<div className="btn-container">
				<button onClick={()=>previousReview()}>
					<FaChevronLeft />
				</button>
				<button onClick={()=>nextReview()}>
					<FaChevronRight />
				</button>
			</div>
	   </article>
    )
}

export default Review