import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, fetchTasks } from '../../features/taskSlice';
import httpService from '../../services/httpService';

// components
import Task from '../Task';

export const TaskList = () => {
	const [tasks, setTasks] = useState([]);
	const dispatch = useDispatch();
	const data = useSelector(state => state.task.data);
	const taskStatus = useSelector(state => state.task.status);

	const submitHandler = async (event) => {
		event.preventDefault();
		const task = {description: event.target['task'].value, done:0}
		const res = await httpService('tasks/new','post',task);
		console.log(res);
		task.id = res.data.insertId;
		dispatch(addTask(task));
		event.target.reset();
	}

	useEffect(() => {
		if(taskStatus === 'idle') {
			dispatch(fetchTasks());
		}
		setTasks(data);
	}, [data, taskStatus, dispatch]);

	return (
		<>
			<h1>To-Do List</h1>
			{ data.length <= 0 ?
				<h2>LOADING...</h2>
				:
				<ul className="row" style={{padding: 0}}>
					{ tasks.map( item => (<Task key={item.id} task={item} />)) }
				</ul>	
			}
			
			<form onSubmit={submitHandler} className="row m-auto justify-content-between">
				<input className="col-8" type="text" name="task" placeholder="New Task" />
				<button type="submit" className="col-2" style={{'marginRight': '0.8rem'}}>Add</button>
			</form>
		</>
	)
};

export default TaskList;