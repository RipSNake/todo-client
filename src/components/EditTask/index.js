import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// From Store
import { updateTask } from '../../features/taskSlice';

export const EditTask = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const {id} = useParams();
	const history = useHistory();
	const dispatch = useDispatch();
	const selected = useSelector(state => state.task.data.filter(item => item.id === parseInt(id)))

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(updateTask({id: selected[0].id, description, done: selected[0].done, folderId: selected[0].folderId}));
		history.goBack();
	}

	const changeHandler = (e) => {
		setDescription(e.target.value);
	}
	
	useEffect(() => {
		setDescription(selected[0].description);
		setTitle(selected[0].description)
	}, [selected]);

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