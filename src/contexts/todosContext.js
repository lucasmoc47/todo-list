import React, { createContext, useReducer } from 'react'

import todosReducer from '../reducers/todosReducer'

const defaultTodos = [
	{ id: '0', task: 'Read a book', completed: false },
	{ id: '1', task: 'Jog in a playground', completed: true },
	{ id: '2', task: 'Write articles', completed: false }
]

export default TodosContext = createContext()

export function TodosProvider(props) {
	const [todos] = useReducer(todosReducer, defaultTodos)

	return (
		<TodosContext.Provider value={todos}>
			{props.children}
		</TodosContext.Provider>
	)
}