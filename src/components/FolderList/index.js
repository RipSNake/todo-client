import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFolders, addFolder, removeFolder } from '../../features/folderSlice';
import { httpService } from '../../services/httpService';
import { Link } from 'react-router-dom';


export const FolderList = () => {
	const [folders, setFolders] = useState([]);
	const dispatch = useDispatch();
	const data = useSelector(state => state.folder.data);
	const folderStatus = useSelector(state => state.folder.status);

	const submitHandler = async (e) => {
		e.preventDefault();
		const folder = {name: e.target['name'].value};
		const res = await httpService('folders','post',folder)
		folder.id = res.data.insertId;
		if(res.status === 200) {
			dispatch(addFolder(folder));
			e.target.reset();
		}
	}

	const deleteHandler = async (id) => {
		await httpService(`folders/${id}`,'delete');
		dispatch(removeFolder(id));
	};

	useEffect(() => {
		if(folderStatus === 'idle') {
			dispatch(fetchFolders());
		}
		setFolders(data);
	}, [data, folderStatus, dispatch])

	return (
		<>
			<h1>Folders List</h1>
			{	folders.length <= 0 ?
				<p>LOADING...</p>
				:
				<ul className="row" style={{padding: 0}}>
					{ folders.map( folder => 
						<li key={folder.id+folder.name} className="row align-items-center">
							<span className="col-6 text-start">- {folder.name}</span>
							<Link className="col-3" to={`/folders/${folder.id}`}>View Items</Link>
							<Link className="col-2" to={'folders'} onClick={() => deleteHandler(folder.id)}>Remove</Link>
						</li>
							
					)}
				</ul>
			}
		
			<form onSubmit={submitHandler} className="row m-auto justify-content-between">
				<input className="col-8" type="text" name="name" placeholder="New Folder" />
				<button type="submit" className="col-2" style={{'marginRight': '0.8rem'}}>Add</button>
			</form>

		</>
	)
};

export default FolderList;