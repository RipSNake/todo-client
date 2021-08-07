

export const EditTask = () => {
	const task = {id:99, description: 'This a fake task', done:0,folderId:null};

	return (
		<>
			<h1>Edit {task.description}</h1>

			<form submit={() => console.log('Edit Form Submitted')}>
				<input type="text" value={task.description} />

				<button type="submit">Save</button>
				<button type="button" onClick={() => console.log('Go BACK AND CANCEL EDITION')}>Cancel</button>
			</form>
		</>
	)
};

export default EditTask;