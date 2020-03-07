import React, { useContext, memo } from 'react';

import useToggleState from '../../hooks/useToggleState'

import { DispatchContext } from '../../contexts/TodosContext'
import { REMOVE_TODO, TOGGLE_TODO } from '../../constants/actions'

import './styles.css'

function Todo({ id, task, completed }) {
	const [isEditing, toggle] = useToggleState(false)

	const dispatch = useContext(DispatchContext)

	if(isEditing) {
		return (
			<li
				className="todo-item"
				style={{ overflowY: 'hidden' }}
				onClick={() => toggle()}
			>
				edit todo form
			</li>
		)
	}

	return (
		<li className="todo-item" onClick={() => dispatch({ type: TOGGLE_TODO, id })}>
			<span style={{
				textDecoration: completed ? 'line-through' : '',
				color: completed ? '#bdc3c7' : '#34495e'
			}}>{task}</span>
			<div className="icons">
				<i
					style={{ color: '#c0392b' }}
					className="fas fa-trash"
					onClick={e => {
						e.stopPropagation()
						dispatch({ type: REMOVE_TODO, id })
					}}
				/>
			</div>
		</li>
	);
}

export default memo(Todo)