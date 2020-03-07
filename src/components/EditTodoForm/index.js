import React, { useContext } from 'react';

import { DispatchContext } from '../../contexts/TodosContext'
import useInputState from '../../hooks/useInputState'

import { EDIT_TODO } from '../../constants/actions'

import './styles.css';

export default function EditTodoForm({ id, task, toggleEditForm }) {
	const [value, handleChange, clearValue] = useInputState(task)
	const dispatch = useContext(DispatchContext)
	
	function handleSubmit(e) {
		e.preventDefault()

		dispatch({ type: EDIT_TODO, id, task: value })
		toggleEditForm()
		clearValue()
	}

	return (
		<form onSubmit={handleSubmit} className="edit-todo-form">
			<input
				autoFocus
				value={value}
				onChange={handleChange}
				onClick={e => e.stopPropagation()}
			/>
		</form>
	);
}
