import { Link } from 'react-router-dom';

export const Task = ({task}) => {
	return (
		<li>
			<input type="checkbox" value={task.done}/>
			<p>{task.description}</p>
			<Link to={`/tasks/${task.id}`}>Edit</Link>
			<button onClick={() => alert('Deleted')}>Remove</button>
		</li>
	)
};

export default Task;