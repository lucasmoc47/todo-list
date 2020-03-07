import React, { useContext, memo } from 'react';

import useToggleState from '../../hooks/useToggleState'

import { DispatchContext } from '../../contexts/TodosContext'
import { REMOVE_TODO, TOGGLE_TODO } from '../../constants/actions'

import EditTodoForm from '../EditTodoForm'

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
				<EditTodoForm id={id} task={task} toggleEditForm={toggle} />
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
				<i 
					style={{ color: '#58b2dc'}}
					className="fas fa-pen"
					onClick={e => {
						e.stopPropagation()
						toggle()
					}}
				/>
			</div>
		</li>
	);
}

export default memo(Todo)