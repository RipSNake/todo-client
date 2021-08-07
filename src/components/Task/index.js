export const Task = ({task}) => {
	return (
		<li>
			<input type="checkbox" value={task.done}/>
			<p>{task.description}</p>
			<a>Edit</a>
			<a>Remove</a>
		</li>
	)
};

export default Task;