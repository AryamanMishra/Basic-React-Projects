import React, {useEffect} from 'react'


const Alert = ({show,msg,type,showAlert})=> {

	useEffect(()=> {
		const timeout = setTimeout(()=> {
			showAlert()
		},2500)
		return ()=> {
			clearTimeout(timeout)
		}
	},[show,msg,type,showAlert])

	
	return (
		<div className={`alert-${type}`}>
			<p>{msg}</p>
		</div>
	)
}

export default Alert
