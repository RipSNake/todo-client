import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateTask } from '../../features/taskSlice';
import httpService from '../../services/httpService';

export const Task = ({task}) => {
 	const [checked, setChecked] = useState(task.done);
 	const dispatch = useDispatch();

 	const doneHandler = async (e) => {
 		const t = {...task};
 		if(e.target.checked) {
 			t.done = 1; 	
 		} else {
 			t.done = 0;
 		}
 		await httpService(`/tasks/${task.id}`,'put',t)
 		.then(res => dispatch(updateTask(t)), 
 					error => console.log(error));
 	};

 	useEffect(() =>{
 		setChecked(task.done)
 	},[task])

	return (
		<li className="row align-items-center">
			<input className="col-1" type="checkbox" onChange={doneHandler} checked={checked}/>
			<p className="col-7 m-0 text-start">{task.description}</p>
			<Link className="col-2" to={`/tasks/${task.id}`}>Edit</Link>
			{/*<Link className="col-2" to={'tasks'} onClick={() => dispatch(removeTask(task.id))}>Remove</Link>*/}
		</li>
	)
};

export default Task;