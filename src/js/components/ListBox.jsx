import React from "react";

export const ListBox = (props) =>{

    
	const deleteTask = (index) =>{
		props.setTaskList(prevList => prevList.filter((_, i)=> i !== index))
	};

    return (
        <>
        <ul className="list-group list-group-flush text-start">
            {props.taskList.length === 0 ?
             (<li className="list-group-item text-muted task">No hay tareas pendientes</li>)
             :(props.taskList.map((item, index) => (
                <li className="list-group-item d-flex justify-content-between align-items-center task" key={index}>{item}
                    <button className="delete-btn btn btn-sm btn-danger" onClick={() => deleteTask(index)}>x</button>
                </li>
            )))
            }
            <div className="list-group-item text-muted task">items: {props.taskList.length}</div>
        </ul>
        </>
    )
}