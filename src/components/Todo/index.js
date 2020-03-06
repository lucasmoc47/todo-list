import React, { useContext, memo } from 'react';

import { DispatchContext } from '../../contexts/TodosContext'
import { REMOVE_TODO, TOGGLE_TODO } from '../../constants/actions'

import './styles.css'

function Todo({ id, task, completed }) {
	const dispatch = useContext(DispatchContext)

	return (
		<li className="todo-item" onClick={() => dispatch({ type: TOGGLE_TODO, id })}>
			<span style={{ 
				textDecoration: completed ? 'line-through' : '',
				color: completed ? '#bdc3c7' : '#34495e'
			}}>{task}</span>
			<div className="icons">
				
			</div>
		</li>
	);
}

export default memo(Todo)