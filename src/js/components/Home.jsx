import { React, useState } from "react";
import { ListBox } from "./ListBox";

const Home = () => {

	const [task, setTask] = useState ('');
	const [taskList, setTaskList] = useState ([])

	const onChange = (event) =>{
		setTask(event.target.value)
	}

	const onKeyDown = (event) => {
		if (event.keyCode === 13){
			if(task.trim() === "" ) {
				setTask(event.target.value = "")
				return;
			}
			const newTaskList = [...taskList, task]
			setTaskList(newTaskList)
			console.log(newTaskList)
			setTask(event.target.value = "")
		}
	}


	return (
		<div className="text-center">
			<h1 className="display-1">TODOS</h1>
			<input onKeyDown={onKeyDown} onChange={onChange} type="text" placeholder="What needs to be done?" ></input>
			<ListBox 
				taskList={taskList}
				setTaskList={setTaskList}>
			</ListBox>
		</div>
	);
};

export default Home;