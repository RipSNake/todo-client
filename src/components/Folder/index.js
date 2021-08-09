import './index.css';
import Task from '../Task';
import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, fetchTasks } from '../../features/taskSlice';
import { fetchFolders } from '../../features/folderSlice';
import { httpService } from '../../services/httpService';

export const Folder = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();
	const folderName = useSelector(state => state.folder.data.filter(folder => folder.id === parseInt(id))).pop().name;
	const tasks = useSelector(state => state.task.data.filter(task => task.folderId === parseInt(id)));
	const taskStatus = useSelector(state => state.task.status);

	const submitHandler = async (e) => {
		e.preventDefault();
		const task = { description: e.target['task'].value, done: 0, folderId: parseInt(id) };
		const res = await httpService('/tasks/new','post',task);
		console.log(res);
		dispatch(addTask(task));
		e.target.reset();
	};

	useEffect(() => {
		if(!folderName) {
			dispatch(fetchFolders());
		}
	}, [folderName, dispatch])

	useEffect(() => {
		if(taskStatus === 'idle'){
			dispatch(fetchTasks());
		}
	},[tasks, taskStatus, dispatch]);

	return (
		<>
			<h1 className="my-3"><span className="folderNav" onClick={() => history.goBack()}>Folders</span> &gt; {folderName}</h1>
			<ul className="row" style={{padding: 0}}>
			{ tasks.map( item => (
				<Task task={item} key={item.id+''+item.folderId} />
				))}
			</ul>

			<form onSubmit={submitHandler} className="row m-auto justify-content-between">
				<input className="col-8" type="text" name="task" placeholder="New Task" />
				<button type="submit" className="col-2" style={{'marginRight': '0.8rem'}}>Add</button>
			</form>
		</>
	)
};

export default Folder;