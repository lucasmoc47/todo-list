import React, { useContext } from 'react';

import { DispatchContext } from '../../contexts/TodosContext'

import useInputState from '../../hooks/useInputState'
import { ADD_TODO } from '../../constants/actions'

import './styles.css'

export default function TodoForm() {
	const [value, handleChange, clearValue] = useInputState('')
	const dispatch = useContext(DispatchContext)

	function handleSubmit(e) {
		e.preventDefault()

		dispatch({ type: ADD_TODO, task: value })
		clearValue()
	}

	return (
		<form onSubmit={handleSubmit} className="todo-form">
			<input
				placeholder="Add your task here..."
				value={value}
				onChange={handleChange}
			/>
		</form>
	);
}
