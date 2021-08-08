import { useParams } from 'react-router-dom';

const task = {id:99, description: 'This a fake task', done:0,folderId:null};

export const EditTask = () => {
	const {id} = useParams();

	console.log('The id param ', id);
	return (
		<>
			<h1>Edit {task.description}</h1>
			<h3>ID: {id}</h3>
			<form submit={() => console.log('Edit Form Submitted')}>
				<input type="text" value={task.description} />

				<button type="submit">Save</button>
				<button type="button" onClick={() => console.log('Go BACK AND CANCEL EDITION')}>Cancel</button>
			</form>
		</>
	)
};

export default EditTask;