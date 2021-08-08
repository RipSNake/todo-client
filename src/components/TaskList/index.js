import Task from '../Task';

const submitHandler = (event) => {
	event.preventDefault();
	console.log('Form submitted ', event);
}

export const TaskList = () => {
	const tasks = [
		{id: 1, description: 'Sample tasks', done: 0},
		{id:2, description: 'My second task', done:1},
		{id:3, description:'Not getting any',done:0}
	]

	return (
		<>
			<h1>To-Do List</h1>
			<ul>
				{ tasks.map( item => (<Task key={item.id} task={item} />)) }
			</ul>
			<form onSubmit={(e) => submitHandler(e)}>
				<input type="text" placeholder="New Task" />
				<button type="submit">Add</button>
			</form>
		</>
	)
};

export default TaskList;