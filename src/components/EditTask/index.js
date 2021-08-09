import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { httpService } from '../../services/httpService';
// From Store
import { updateTask, fetchTasks } from '../../features/taskSlice';

export const EditTask = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const { id } = useParams();
	const history = useHistory();
	const dispatch = useDispatch();
	const selected = useSelector(state => state.task.data.filter(item => item.id === parseInt(id)))
	const taskStatus = useSelector(state => state.task.status);

	const submitHandler = async (e) => {
		e.preventDefault();
		const updated = {...selected[0], description: description};
		console.log('Updated value ', updated);
		await httpService(`tasks/${id}`,'put',updated);
		dispatch(updateTask(updated));
		history.goBack();
	}

	const changeHandler = (e) => {
		setDescription(e.target.value);
	}
	
	useEffect(() => {
		if(taskStatus === 'idle' || taskStatus === 'failed') {
			dispatch(fetchTasks());
		} else if(selected[0] !== undefined && description === '') {
			setDescription(selected[0].description);
			setTitle(selected[0].description);
		}
	}, [selected, dispatch, taskStatus, description]);

	return (
		<>
			<h1>Editing Task "{title}"</h1>
			
			<form onSubmit={submitHandler} className="row">
				<input className="col-10 mb-3" type="text" name="description" value={description} onChange={changeHandler}/>
				<br />
				<button type="submit" className="col-3" style={{'marginRight': '1rem'}}>Save</button>
				<button type="button" className="col-3" onClick={() => history.goBack()}>Cancel</button>
			</form>
		</>
	)
};

export default EditTask;